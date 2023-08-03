import { Component } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  from,
  map,
  switchMap,
  tap,
  filter,
  catchError,
  of,
  take,
  interval,
  timer,
  takeUntil,
  forkJoin,
} from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-rxjs-testing',
  templateUrl: './rxjs-testing.component.html',
  styleUrls: ['./rxjs-testing.component.scss'],
})
export class RxjsTestingComponent {
  numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8]);
  numbersTake$ = interval(1000);

  timer$ = timer(6000);

  observable1$ = of('value 1');
  observable2$ = of('value 2');
  observable3$ = of('value 3');

  user = {
    exists: false,
    name: ' ',
    avatar_url: '',
  };

  formGithub = new FormGroup({
    username: new FormControl(''),
  });

  ngOnInit(): void {
    this.numbers$
      .pipe(
        map((number) => {
          return number % 2 == 0
            ? { number: number, isEven: true }
            : { number: number, isEven: false };
        }),
        tap(console.log)
      )
      .subscribe();

    this.takeOperator();
    this.takeUntilOperator();
    this.forkJoinOperator();

    this.formGithub.controls.username.valueChanges
      .pipe(
        debounceTime(1000),
        filter((string) => string?.trim() != ''),
        tap(console.log),
        distinctUntilChanged(),
        switchMap((query) => {
          return ajax
            .getJSON<any>(`https://api.github.com/users/${query}`)
            .pipe(
              catchError((err) => {
                console.log('Ocorreu uma falha na requisição!');
                return of(err);
              })
            );
        })
      )
      .subscribe((response) => {
        if (response.status == 404) {
          this.user = {
            name: '',
            avatar_url: '',
            exists: false,
          };
        } else {
          this.user = {
            name: response?.name,
            exists: true,
            avatar_url: response?.avatar_url,
          };
        }
        console.log(response);
      });
  }

  takeOperator() {
    const emitter$ = this.numbersTake$.pipe(take(4));

    emitter$.subscribe((val) =>
      console.log(`Emitted from take operator - ${val}`)
    );
  }

  takeUntilOperator() {
    const emitter$ = this.numbersTake$.pipe(takeUntil(this.timer$));

    emitter$.subscribe((val) =>
      console.log(`Emitted from takeUntil operator - ${val}`)
    );
  }

  forkJoinOperator() {
    const result$ = forkJoin([
      this.observable1$,
      this.observable2$,
      this.observable3$,
    ]);

    result$.subscribe((values) => {
      const [firstValue, secondValue, thirdValue] = values;
      console.log(`First Value: ${firstValue}`);
      console.log(`Second Value: ${secondValue}`);
      console.log(`Third Value: ${thirdValue}`);
    });
  }
}

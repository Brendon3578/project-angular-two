import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-filho',
  templateUrl: './component-filho.component.html',
  styleUrls: ['./component-filho.component.scss'],
})
export class ComponentFilhoComponent {
  @Input() child: string = '';
  @Output() clickFilho = new EventEmitter<void>();

  botaoClick() {
    this.clickFilho.emit();
  }

  alertaDoPai() {
    alert(`Alerta disparado do ${this.child}`);
  }
}

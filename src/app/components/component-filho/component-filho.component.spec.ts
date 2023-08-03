import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFilhoComponent } from './component-filho.component';

describe('ComponentFilhoComponent', () => {
  let component: ComponentFilhoComponent;
  let fixture: ComponentFixture<ComponentFilhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentFilhoComponent]
    });
    fixture = TestBed.createComponent(ComponentFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

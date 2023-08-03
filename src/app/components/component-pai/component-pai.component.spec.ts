import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPaiComponent } from './component-pai.component';

describe('ComponentPaiComponent', () => {
  let component: ComponentPaiComponent;
  let fixture: ComponentFixture<ComponentPaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentPaiComponent]
    });
    fixture = TestBed.createComponent(ComponentPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

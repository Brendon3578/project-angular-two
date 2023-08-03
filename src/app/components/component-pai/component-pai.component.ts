import { Component, ViewChildren, QueryList } from '@angular/core';
import { ComponentFilhoComponent } from '../component-filho/component-filho.component';

@Component({
  selector: 'app-component-pai',
  templateUrl: './component-pai.component.html',
  styleUrls: ['./component-pai.component.scss'],
})
export class ComponentPaiComponent {
  @ViewChildren(ComponentFilhoComponent)
  filhoComponent!: QueryList<ComponentFilhoComponent>;

  botaoPai() {
    this.filhoComponent.forEach((filhoComponent) => {
      filhoComponent.alertaDoPai();
    });
  }

  eventoFilho() {
    window.alert('O evento do filho foi chamado');
  }
}

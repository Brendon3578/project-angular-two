import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentPaiComponent } from './components/component-pai/component-pai.component';
import { ComponentFilhoComponent } from './components/component-filho/component-filho.component';
import { RxjsTestingComponent } from './components/rxjs-testing/rxjs-testing.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComponentPaiComponent,
    ComponentFilhoComponent,
    RxjsTestingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

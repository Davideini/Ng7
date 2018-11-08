import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { ElementsLibModule } from 'elements-lib';

@NgModule({
  imports: [BrowserModule, ElementsLibModule],
  declarations: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {  }

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('first-element', el);
  }
}

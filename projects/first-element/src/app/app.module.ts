import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ComponentFactoryResolver } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularCustomElementBridge } from 'elements-lib';
import { AppElement } from './app.element';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {

    const bridge = new AngularCustomElementBridge<AppComponent>(this.injector, AppComponent);

    this.injector.get(ComponentFactoryResolver).resolveComponentFactory(AppComponent).inputs
      .forEach(input => AppElement.attributes.push(input.templateName));

    AppElement.bridge = bridge;


  }

  ngDoBootstrap() {
    customElements.define('first-element', AppElement);
  }
}

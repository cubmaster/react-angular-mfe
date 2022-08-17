import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { Injector } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
     
  ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
//  constructor(private injector: Injector) {
//  }
//
//  ngDoBootstrap() {
//    const ce = createCustomElement(HelloComponent, {injector: this.injector});
//    const app = createCustomElement(AppComponent, {injector: this.injector});
//    customElements.define('app-root', app);
//    customElements.define('mfe-app-hello', ce);
// 
//  }

}

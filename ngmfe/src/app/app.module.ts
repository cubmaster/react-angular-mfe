import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { Injector } from '@angular/core';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
    AppComponent,HelloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
     
  ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {


}

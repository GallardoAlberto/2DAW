import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { fechaactualComponent } from './fechaactual/fechaactual.component';
import { HolaComponent } from './hola/hola.component';

@NgModule({
  declarations: [
    AppComponent, 
    fechaactualComponent, HolaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

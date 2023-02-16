import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjdirectivangswitchComponent } from './ejdirectivangswitch/ejdirectivangswitch.component';
import { EstilosDirectiveCeltics, EstilosDirectiveLakers, EstilosDirectiveBulls } from './estilos.directive';

@NgModule({
  declarations: [
    AppComponent,
    EjdirectivangswitchComponent,
    EstilosDirectiveLakers,
    EstilosDirectiveCeltics,
    EstilosDirectiveBulls
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

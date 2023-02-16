import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FechaComponent } from './fecha/fecha.component';
import { LugarComponent } from './lugar/lugar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FotoComponent } from './foto/foto.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaComponent,
    LugarComponent,
    ContactoComponent,
    FotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

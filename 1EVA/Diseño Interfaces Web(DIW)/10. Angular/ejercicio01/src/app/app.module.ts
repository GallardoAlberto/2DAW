import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RaizComponent } from './raiz/raiz.component';
import { FechaComponent } from './fecha/fecha.component';
import { FotoComponent } from './foto/foto.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugarComponent } from './lugar/lugar.component';

@NgModule({
  declarations: [
    AppComponent,
    RaizComponent,
    FechaComponent,
    FotoComponent,
    ContactoComponent,
    LugarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

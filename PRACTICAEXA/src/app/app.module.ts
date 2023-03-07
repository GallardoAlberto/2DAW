import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';
import { FavoritoComponent } from './favorito/favorito.component';
import { PersonajesService } from './servicios/personajes.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PersonajeComponent,
    EditarComponent,
    FavoritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PersonajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

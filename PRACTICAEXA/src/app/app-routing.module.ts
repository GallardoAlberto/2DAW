import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonajeComponent } from './personaje/personaje.component';

const routes: Routes = [
  { path : '', component : InicioComponent },
  { path : 'personajes', component : PersonajeComponent },
  { path : 'editar/:personajeNombre/:personajeC1/:personajeC2/:personajeC3', component : EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

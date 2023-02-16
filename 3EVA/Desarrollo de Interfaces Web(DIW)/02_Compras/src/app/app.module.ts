import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EtiquetasComponent } from './etiquetas/etiquetas.component';
import { DatosClientesService } from './servicios/datos-clientes.service';
import { Routes, RouterModule } from '@angular/router';

const rutas : Routes = [
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'clientes', component: ClientesComponent },
  
]
  

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    ClientesComponent,
    EtiquetasComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(rutas)],
  providers: [ProveedoresService, DatosClientesService],
  bootstrap: [AppComponent],
})
export class AppModule {}

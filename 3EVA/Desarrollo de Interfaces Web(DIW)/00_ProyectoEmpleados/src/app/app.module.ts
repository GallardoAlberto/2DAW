import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstiloPersonalizado1, EstiloPersonalizado2 } from './mis-estilos.directive';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';
import { CaracEmpComponent } from './carac-emp/carac-emp.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './componente-hijo/empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EstiloPersonalizado1,
    EstiloPersonalizado2,
    ComponenteHijoComponent,
    CaracEmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

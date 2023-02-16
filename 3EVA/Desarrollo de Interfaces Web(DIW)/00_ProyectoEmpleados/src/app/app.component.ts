import { Component, Input } from '@angular/core';
import { Empleado } from './modelos/empleado.modelo';
import { EstiloPersonalizado2 } from './mis-estilos.directive';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './componente-hijo/empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = '00_ProyectoEmpleados';

  constructor(private miServicio : ServicioEmpleadosService, private empleadosService : EmpleadosService){
    this.empleados = this.empleadosService.empleados;
    this.apellidosEmpleados = this.empleadosService.apellidosEmpleados;
  }

  
  salario = 0;
  cont = 3;
  parrafo: any;
  mensaje : any;
  datos : any;

  empleados : Array<Empleado> = [];
  
  apellidosEmpleados : any = [];

  crearEmpleado(nombre : string, apellido : string, cargo : string, salario : string) {
    let newEmpleado = new Empleado(nombre, apellido, cargo, salario);
    
    if(this.apellidosEmpleados.includes(apellido) == true){
      alert("Empleado con el mismo apellido, inserta otro");
    }else{
      this.miServicio.muestraMensaje("Nombre del empleado: " + newEmpleado.nombre);
      this.empleadosService.agregarEmpleadoServicio(newEmpleado);
      this.apellidosEmpleados.push(apellido);
    }

  }

}

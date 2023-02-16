import { Injectable } from '@angular/core';
import { Empleado } from '../modelos/empleado.modelo';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  mariaBeltran = new Empleado("María", "Beltrán", "Directora", "3000");
  martaGonzalez = new Empleado("Marta", "González", "Coordinadora", "2000");
  pedroPerez = new Empleado("Pedro", "Pérez", "Botones","1500"); 

  empleados : Array<Empleado> = new Array(this.mariaBeltran,this.martaGonzalez,this.pedroPerez);
  apellidosEmpleados : any = [ this.mariaBeltran.apellido, this.martaGonzalez.apellido, this.pedroPerez.apellido ];
  agregarEmpleadoServicio(empleado : Empleado){
    this.empleados.push(empleado);
  }

  constructor() { }
}

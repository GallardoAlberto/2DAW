import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../modelos/empleado.modelo';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css'],
})
export class ComponenteHijoComponent implements OnInit {
  @Input() empleado: Empleado;
  @Input() i: number;

  constructor(private miServicio:ServicioEmpleadosService) {}

  arrayCaract = [''];
  anadirCaract(caract: string) {
    this.miServicio.muestraMensaje("Característica: " + caract);
    this.arrayCaract.push(caract);
  }

  ngOnInit(): void {}
}

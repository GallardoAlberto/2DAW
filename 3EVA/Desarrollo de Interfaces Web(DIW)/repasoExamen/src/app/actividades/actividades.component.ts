import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActividadesService } from '../actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
})
export class ActividadesComponent {
  @Input() destinoValor: any;

  @Output() mensajeEnviado = new EventEmitter<string>();

  click: boolean = false;

  selected: number = -1;

  londres: any[];
  berlin: any[];
  selectedItem: number;
  mensaje = '';

  hacerCompra() {
    this.click = true;
  }
  
  enviarMensaje(actividad : string) {
    console.log('Enviado');
    if (this.destinoValor == 'Londres') {
      this.mensaje = this.destinoValor + ' regalo: ' + actividad;
    } else if (this.destinoValor == 'Berlín') {
      this.mensaje = this.destinoValor + ' regalo: ' + actividad;
    }
    console.log('Mensaje enviado desde hijo:', this.mensaje);
    this.mensajeEnviado.emit(this.mensaje);
  }
  

  constructor(private servicioActividades: ActividadesService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.londres = this.servicioActividades.getLondres();
    this.berlin = this.servicioActividades.getBerlin();
  }
}

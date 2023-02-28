import { Component } from '@angular/core';
import { ActividadesService } from './actividades.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'repasoExamen';

  londres : any[];
  berlin : any[];

  destino : string = "";
  destinoValor : string = "";

  mensaje = '';
  click = false;

  comprobarDestino(destino : string){
    this.click = true;
    this.destinoValor = destino;
    return this.destinoValor;
  }

  constructor(private servicioActividades : ActividadesService){}

  ngOnInit(): void {
    this.londres = this.servicioActividades.getLondres();
    this.berlin = this.servicioActividades.getBerlin();
  }

}

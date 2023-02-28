import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  londres = ['Parque de atracciones', 'Museo', 'Gastronomia', 'Cine'];
  berlin = ['Parque de atracciones', 'Fiesta de la cerveza', 'Visita al muro'];

  constructor() { }

  getLondres(){
    return this.londres;
  }

  getBerlin(){
    return this.berlin;
  }
}

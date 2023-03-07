import { Injectable } from '@angular/core';
import { Personajes } from '../modelos/personajes';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  personaje1 = new Personajes('Moha', 'Puño', 'Robo', 'Mofeta', 'Personaje agresivo, si le miras te mata');
  personaje2 = new Personajes('Jony', 'Correr', 'Atraco', 'Conducir', 'Personaje con poca vida, pero eficaz en sus movimientos');
  personaje3 = new Personajes('El chino', 'Vender', 'Calcular', 'Vigilar', 'Personaje pasivo, aguanta de todo');

  personajes = new Array(this.personaje1, this.personaje2, this.personaje3);
  
  constructor() { }

  getPersonajes(){
    return this.personajes;
  }
}

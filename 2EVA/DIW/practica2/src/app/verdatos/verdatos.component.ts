import { Component } from '@angular/core';
import { Persona } from '../modelos/persona.modelo';

@Component({
  selector: 'app-verdatos',
  templateUrl: './verdatos.component.html',
  styleUrls: ['./verdatos.component.css']
})
export class VerdatosComponent{

  diaSorteo(){
    return Math.round(Math.random() * 27 + 1) ;
  }

  numRandom(){
    return Math.round(Math.random() * 4 + 1);
  }

  alberto = new Persona('Alberto', 'Gallardo', 'Morales', 24);


}

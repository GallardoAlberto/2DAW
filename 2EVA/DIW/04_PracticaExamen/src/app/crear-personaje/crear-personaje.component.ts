import { Component } from '@angular/core';
import { Personajes } from '../modelos/personajes.modelo';

@Component({
  selector: 'app-crear-personaje',
  templateUrl: './crear-personaje.component.html',
  styleUrls: ['./crear-personaje.component.css']
})
export class CrearPersonajeComponent {

  characterName = "";
  hability1Name = "";
  hability2Name = "";
  hability3Name = "";
  typeName = "";
  
  personajes : Array<Personajes> = new Array();

  filtro(valor : any){
    return valor;
  }

  agregar(name : string, hability1 : string, hability2 : string, hability3 : string , type : string){
    let newPersonaje = new Personajes(name, hability1, hability2, hability3, type);
    this.personajes.push(newPersonaje);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {

  canciones = ["Abrelapuerta.mp3", "Aretha.mp3", "BeboyCigala.mp3", "CryBaby.mp3", "DiasEscuela.mp3", "Ifeeltheearth.mp3", "Whatsup.mp3"];
  
  getCanciones(){
    return this.canciones;
  }
  constructor() { }
}

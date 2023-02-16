import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  template: `
  <h1>Contacto!</h1>
  <h3>Nombre : {{nombre}}</h3>
  <h3>Correo : {{correo}}</h3>
  <h3>Recuerda que estamos en:</h3> 
  <app-lugar></app-lugar>`,
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  nombre : String = "Alberto";
  correo : String = "alberto.gmail.com";
  constructor() { }

  ngOnInit(): void {
  }

}

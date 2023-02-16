import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  nombre: String = "Alberto";
  correo: String = "alberto.gallardo3@educa.madrid.org";
  constructor() { }

  ngOnInit(): void {
  }

}

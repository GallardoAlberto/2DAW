import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Output() cambio = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


}

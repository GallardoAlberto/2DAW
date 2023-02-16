import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css'],
})
export class NietoComponent {
  // @Output() cambiar = new EventEmitter<boolean>();
  @Output() contenido = new EventEmitter<string>();

  boton: string = 'Comprar';
  botonColor: string = 'red';

  cambiarBoton() {
    if (this.boton === 'Comprar') {
      this.boton = 'Tengo';
      this.botonColor = 'green';
    } else {
      this.boton = 'Comprar';
      this.botonColor = 'red';
    }
    this.contenido.emit(this.boton);
  }
}

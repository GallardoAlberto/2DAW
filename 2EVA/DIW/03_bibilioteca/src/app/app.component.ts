import { Component } from '@angular/core';
import { Libro } from './modelo/libro.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03_bibilioteca';

  libro1 = new Libro('A01', 'Star Wars', 'Pepe', 'Santillana', true);
  libro2 = new Libro('A02', 'Spider-man', 'Moha', 'Santillana', false);
  libro3 = new Libro('A03', 'Los 7 enanitos', 'Peter', 'Santillana', true);

  libros : Array<Libro> = new Array(this.libro1, this.libro2, this.libro3);

  noMostrar : boolean = false;

  lista1 = false;
  lista2 = false;

  ocultar(valor : boolean){
    this.noMostrar = true;
  }

  mostrarBotones(){
    this.noMostrar = false;
    this.lista1 = false;
    this.lista2 = false;
  }

}

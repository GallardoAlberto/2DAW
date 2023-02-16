import { Component } from '@angular/core';
import { Tarta } from './modelos/tarta.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_ProyectoTartaCorrecto';

  tartas : Array<Tarta> = new Array();

  newTarta(nombre: string, sabor : string, intolerancia : string, caloriasRacion: string, precio : string, numPorciones : string){
    let tarta = new Tarta(nombre, sabor , intolerancia , caloriasRacion, precio , numPorciones );
    this.tartas.push(tarta);

    console.log(tarta.intolerancia);
  }

  filtrarPor(intolerancia : string){
    return intolerancia;
  }
}

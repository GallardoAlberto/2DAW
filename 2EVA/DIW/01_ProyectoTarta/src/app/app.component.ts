import { Tarta } from './modelos/tarta.modelo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_ProyectoTarta';

  tartas : Array<Tarta> = new Array();
  gluten = new Array();
  vegano = new Array();
  huevo = new Array();
  lactosa = new Array();
  dieta = new Array();

  cal : any = 0;

  newTarta(nombre: string, sabor : string, intolerancia : string, caloriasRacion: string, precio : string, numPorciones : string){
    let tarta = new Tarta(nombre, sabor , intolerancia , caloriasRacion, precio , numPorciones );
    this.tartas.push(tarta);

    if(tarta.intolerancia == 'Gluten'){
      this.gluten.push(tarta);
    }

    if(tarta.intolerancia == 'Vegano'){
      this.vegano.push(tarta);
    }

    if(tarta.intolerancia == 'Huevo'){
      this.huevo.push(tarta);
    }

    if(tarta.intolerancia == 'Lactosa'){
      this.lactosa.push(tarta);
    }

    if(tarta.intolerancia == 'Dieta'){
      this.dieta.push(tarta);
    }
  }

  filtrarPor(intolerancia : string){
    return intolerancia;
  }
}

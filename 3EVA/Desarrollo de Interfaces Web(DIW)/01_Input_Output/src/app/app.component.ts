import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Input_Output';

  alimentos = ["Pan", "Miel", "Leche", "Arroz"];
  
  comprados = [''];

  articuloComprado(valor : string){
    this.comprados.push(valor);
  }

  seleccion : any;
  nombreAlimento : any;
  check : any;
  articuloSeleccionado(valor : any){
    this.nombreAlimento = valor;

    if(valor == this.seleccion){
      this.check = false;
      this.seleccion = '';
    }else{
      this.check = true;  
      this.seleccion = valor;
    }
    }

}

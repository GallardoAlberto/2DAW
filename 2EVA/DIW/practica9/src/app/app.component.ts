import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica9';

  nota : number = 5;
  aprobado = "Has aprobado";
  suspen = "Has suspendido";

  menos1(){
    if(this.nota < 1){
      return 0;
    }else{
      return this.nota = this.nota - 1;
    }
  }

  mas1(){
    if(this.nota > 9){
      return 10;
    }else{
      return this.nota = this.nota + 1;
    }
  }
}

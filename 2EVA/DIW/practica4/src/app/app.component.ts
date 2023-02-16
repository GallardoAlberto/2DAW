import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica4';

  mensaje = "";

  resultado(iva : String) {

    if(Number(iva) > 20){
      this.mensaje = "Artículo de lujo";
    }else{
      this.mensaje = "Artículo que no es de lujo";
    }
  }
}

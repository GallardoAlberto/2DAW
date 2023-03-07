import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent {

  @Output() añadirFav = new EventEmitter<string>();

  Favorito(){
    this.añadirFav.emit("Favorito");
  }
}

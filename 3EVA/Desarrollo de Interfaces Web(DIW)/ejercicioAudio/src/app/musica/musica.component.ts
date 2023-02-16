import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CancionesService } from '../canciones.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {

  canciones: any;
  constructor(private servicioCanciones : CancionesService, private router : Router) { }

  ngOnInit(): void {
    this.canciones = this.servicioCanciones.getCanciones();
  }

  playlist1 : Array<any> = [];
  buttonDisabled = false;

  addToPlaylist(valor : string){
    if(this.playlist1.includes(valor)){
      console.log("Ya existe");
    }else{
      this.playlist1.push(valor);
      console.table(this.playlist1);
    }
  }

  pasarArray() {
    this.router.navigate([], { state: { playlist1: this.playlist1 } });
  }


  
}

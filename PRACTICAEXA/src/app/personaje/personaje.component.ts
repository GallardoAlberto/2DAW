import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajesService } from '../servicios/personajes.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent {

  personajes : any;
  favorito : any;
  seleccionado : any;

  constructor(public servicioPersonajes : PersonajesService, private router : Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.personajes = this.servicioPersonajes.getPersonajes();
  }

  goEditar(nombre : string, caracteristica1 : string, caracteristica2 : string, caracteristica3 : string){
    this.router.navigate(['/editar', nombre, caracteristica1, caracteristica2, caracteristica3]);
  }

  mostrar(favorito : string, i : any){
    this.seleccionado = i;
    this.favorito = favorito;
  }
}

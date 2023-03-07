import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from '../servicios/personajes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {


  personajeNombre : any;
  personajeC1 : any;
  personajeC2 : any;
  personajeC3 : any;

  editarC1 : any;
  editarC2 : any;
  editarC3 : any;

  personajes : any;

  constructor(public router : Router, public ruta : ActivatedRoute, public servicioPersonajes : PersonajesService, public location : Location){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.personajeNombre = this.ruta.snapshot.params['personajeNombre'];
    this.personajeC1 = this.ruta.snapshot.params['personajeC1'];
    this.personajeC2 = this.ruta.snapshot.params['personajeC2'];
    this.personajeC3 = this.ruta.snapshot.params['personajeC3'];

    this.editarC1 = this.personajeC1;
    this.editarC2 = this.personajeC2;
    this.editarC3 = this.personajeC3;

    this.personajes = this.servicioPersonajes.getPersonajes();
  }

  editarPersonaje(nombre : string, C1 : string, C2 : string, C3 : string){
    for (let i = 0; i < this.personajes.length; i++) {
      if(this.personajes[i].nombre == nombre){
        this.personajes[i].caracteristica1 = C1;
        this.personajes[i].caracteristica2 = C2;
        this.personajes[i].caracteristica3 = C3;

      }
    }
    console.table(this.personajes);
    alert("Cambios realizados con éxito");
  }

  goBack(){
    this.location.back();
  }


}

import { Component } from '@angular/core';
import { Candidatos } from './modelo/candidatos.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen';

  // Array de estudios
  nivelesEstudios = [{
    "codNivel" : 'SE',
    "nivel" : 'Sin estudios'
  }
  ,
  {
    "codNivel" : 'B',
    "nivel" : 'Bachillerato'
  }
  ,
  {
    "codNivel" : 'CS',
    "nivel" : 'Ciclo Superior'
  }
  ,
  {
    "codNivel" : 'CM',
    "nivel" : 'Ciclo Medio'
  }
  ,
  {
    "codNivel" : 'G',
    "nivel" : 'Grado'
  }
  ,
  {
    "codNivel" : 'M',
    "nivel" : 'Máster'
  }];
  
  contClick = 0;

  // candidatos

  candidato1 = new Candidatos(1, 'Alberto', 612345678, 24, 'Desarrollo Web', [{codNivel: 'GS', nivel: 'Grado Superior'}], 9);
  candidato2 = new Candidatos(2, 'Victor', 612455678, 30, 'Desarrollo Web', [{codNivel: 'GS', nivel: 'Grado Superior'}], 12);
  candidato3 = new Candidatos(3, 'Rául', 632145678, 22, 'Desarrollo Web', [{codNivel: 'GS', nivel: 'Grado Superior'}], 7);

  //Array de candidatos

  candidatos : Array<Candidatos> = new Array(this.candidato1, this.candidato2, this.candidato3);


  //Variables de usuario y contraseña
  usuario = "Usuario:"; 
  contrasenia = "Contraseña:";
  // user = "";
  // pass = "";

  //mensaje de error.
  mensaje = "Error en la identificación";

  //variable para ocultar login
  mostrar = false;

  // comprobar usuario y contraseña

  contC(){
    return this.contClick++;
  }
  comprobar(usuario : string, contraseña : string){
    if(usuario == 'Arturo' && contraseña == 'Sastre'){
      this.mostrar = true;
      return true;
    }else{
      return false;
    }
  }

  // Empezar a contar candidatos
  cont = 1;

  contadorCandidatos(){
    return this.cont;
  }

  // siguiente candidato
  siguiente(){
    this.cont++;

    if(this.cont > this.candidatos.length){
      this.cont = this.cont - 1;
    }
    return this.cont;

  }

  // anterior candidato

  anterior(){
    this.cont--;

    if(this.cont < 1){
      this.cont = this.cont + 1;
    }

    return this.cont;

  }

  // comprobar el checkBox

  isChecked : boolean = false;


  //Filtrar

  obtenerF(valor : string){
    return valor;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocinaService } from '../services/cocina.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  cocinas;
  
  constructor(private servicioCocina : CocinaService,private routes: Router){
    this.cocinas = this.servicioCocina.getCocinas();
  }

  ngOnInit(): void {
  }

  goAbout(){
    this.routes.navigate(['about']);
  }
}

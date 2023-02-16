import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocinaService } from '../services/cocina.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  
})
export class PortfolioComponent implements OnInit {

  cocinas;
  
  constructor(private servicioCocina : CocinaService, private router: Router){
    this.cocinas = this.servicioCocina.getCocinas();
  }

  ngOnInit(): void {
  }

  goDetails(image : string, description : string) {
    this.cocinas.forEach(element => {
      if(element.image == image && element.description == description){
        this.router.navigate(['/details', element.reference ,element.image, element.description , element.price, element.color]);
      }
    });
  }
}

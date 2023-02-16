import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  reference : string;
  image: string;
  description: string;
  color : string;
  price : number;

  constructor(private ruta: ActivatedRoute, private router:Router, private location: Location) {}

  ngOnInit(): void {
    this.reference = this.ruta.snapshot.params['reference'];
    this.image = this.ruta.snapshot.params['image'];
    this.description = this.ruta.snapshot.params['description'];
    this.color = this.ruta.snapshot.params['color'];
    this.price = this.ruta.snapshot.params['price'];
  }

  goHome(){
    this.router.navigate(['']);
  }

  goPortfolio(){
    this.location.back();
  }

  goPrice(reference : string){
    this.router.navigate(['price', reference]);
  }
}

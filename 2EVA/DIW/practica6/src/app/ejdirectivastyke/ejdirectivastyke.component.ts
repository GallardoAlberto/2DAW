import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivastyke',
  templateUrl: './ejdirectivastyke.component.html',
  styleUrls: ['./ejdirectivastyke.component.css']
})
export class EjdirectivastykeComponent implements OnInit {

  puntuacion: number=0;
  
  setColor() {
    return this.puntuacion >= 5 ? 'green' : 'red';
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

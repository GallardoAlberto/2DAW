import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.css']
})
export class EjdirectivangifComponent implements OnInit {

  nombre: string="";

  registro : boolean = false;
  noRegistrado : boolean = true;

  on(){
    this.registro = true;
    this.noRegistrado = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

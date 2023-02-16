import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha',
  template: `
  <h3>{{fecha}}</h3>
  <app-lugar></app-lugar>
  `
})
export class FechaComponent {
  fecha : any = new Date();
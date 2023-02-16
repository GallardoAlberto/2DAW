import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha',
  template: `<h3>{{fecha}}</h3>`,
})
export class FechaComponent implements OnInit {

  fecha : any = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}

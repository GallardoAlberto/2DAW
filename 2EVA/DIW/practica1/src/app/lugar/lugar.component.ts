import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugar',
  template: `<h3>{{lugar}}</h3>`
})
export class LugarComponent implements OnInit {

    lugar: String = "Madrid";
  constructor() { }

  ngOnInit(): void {
  }

}

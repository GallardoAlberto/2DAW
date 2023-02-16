import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  template: `<img src="../../assets/plazaMayor.jpg" alt="">`,
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  template: `<img src="../../assets/plaza_mayor.jpg" alt="plazaMayor">`,
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

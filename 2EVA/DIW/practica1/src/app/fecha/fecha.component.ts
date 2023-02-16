import { Component } from '@angular/core';

@Component({
  selector: 'app-fecha',
  template: `<h3>{{fecha}}</h3>
  <h3><app-lugar></app-lugar></h3>`,
  styles : ['h3{color: blueviolet}']
})
export class FechaComponent {
  fecha : any = new Date();
}

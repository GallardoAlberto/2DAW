import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carac-emp',
  templateUrl: './carac-emp.component.html',
  styleUrls: ['./carac-emp.component.css']
})
export class CaracEmpComponent implements OnInit {

  @Output() caractemp=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCaract(value:string){
    this.caractemp.emit(value);
    }
}

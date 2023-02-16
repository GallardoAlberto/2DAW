import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.css']
})
export class EtiquetasComponent implements OnInit {

  @Input() proveedor : any;
  @Input() cifProveedor : any;

  @Input() cliente : any;
  @Input() nifProveedor : any;

  comprobar = '';
  click = false;

  comprobarBoton(nif : any){
    this.comprobar = nif;
    console.log(nif);
    if(this.click == false){
      this.click = true  
    }else{
      this.click = false;
    }
  }
  ngOnInit(): void {
  }

}

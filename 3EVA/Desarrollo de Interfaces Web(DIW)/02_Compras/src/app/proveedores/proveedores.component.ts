import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  
  proveedores: any;
  constructor(private proveedoresService:ProveedoresService) { }
  
  ngOnInit(): void {
    this.proveedores = this.proveedoresService.getProveedores();
  }

  cifProveedor = '';
  click = false;

  comprobarBoton(cif : any){
    this.cifProveedor = cif;
    console.log(this.cifProveedor);
    if(this.click == false){
      this.click = true  
    }else{
      this.click = false;
    }
  }
}

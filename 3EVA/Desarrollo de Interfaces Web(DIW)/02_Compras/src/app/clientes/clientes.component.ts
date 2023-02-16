import { Component, OnInit } from '@angular/core';
import { DatosClientesService } from '../servicios/datos-clientes.service';
import { ProveedoresService } from '../servicios/proveedores.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes : any;
  proveedores : any;
  
  constructor(private datosClientes : DatosClientesService, private datosProveedores : ProveedoresService) {
  }

  ngOnInit(): void {
    this.clientes = this.datosClientes.getClientes();
    this.proveedores = this.datosProveedores.getProveedores();
  }
  
  nifProveedor = '';
  click = false;

  comprobarBoton(nif : any){
    this.nifProveedor = nif;
    console.log(nif);
    if(this.click == false){
      this.click = true  
    }else{
      this.click = false;
    }
  }

}

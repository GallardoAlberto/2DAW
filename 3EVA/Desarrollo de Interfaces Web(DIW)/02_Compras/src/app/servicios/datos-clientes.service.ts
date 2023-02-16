import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosClientesService {

  clientes: any = [
    {
      codCliente: '012345',
      nombre: 'Alberto Gallardo',
      direccion: 'Calle Golondrinas, 6',
      correo: 'gallardo.alb.1998@gmail.com',
      nif_proveedor_energia: 'B12345678'
    },
    {
      codCliente: '112345',
      nombre: 'Mohamed Alli',
      direccion: 'El Gorronal, 15',
      correo: 'mohitaone@gmail.com',
      nif_proveedor_energia: 'B87654321'
    },
  ];

  constructor() { }

  getClientes() {
    return this.clientes;
  }

  
}

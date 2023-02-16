import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {
  @Input() alimento: string;
  @Output() alimentoSeleccionado = new EventEmitter<string>();
  @Output() añadido = new EventEmitter<boolean>();
  @Output() quitado = new EventEmitter<boolean>();

  boton: string;
  tachar : string;
  articulosComprados = new Array();

  estaAñadido = true;
  estaQuitado = false;

  cambiarBoton(valor: string) {
    this.boton = valor;
    if(this.boton == 'Tengo'){
      this.tachar = 'line-through';
      this.alimentoSeleccionado.emit(this.alimento);
      this.añadido.emit(this.estaAñadido);
    }else{
      this.tachar = 'none';
      this.alimentoSeleccionado.emit(this.alimento);
      this.quitado.emit(this.estaQuitado);
    }
  }
  
}

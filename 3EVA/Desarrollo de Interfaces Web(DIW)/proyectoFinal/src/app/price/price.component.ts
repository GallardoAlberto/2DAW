import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocinaService } from '../services/cocina.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  cocinas : any[];
  reference : string;
  price : string;
  
  constructor(private ruta : ActivatedRoute, private arrayCocinas : CocinaService) { 
  }

  ngOnInit(): void {
    this.reference = this.ruta.snapshot.params['reference'];
    this.cocinas = this.arrayCocinas.getCocinas();
  }

  changePrice(reference : string){
    if(confirm("¿Estas seguro de cambiar el precio del producto: " + reference + "?")){
      this.cocinas.forEach(valor => {
        if(valor.reference == reference){
          if(isNaN(parseInt(this.price)) || !Number(this.price)){
            alert("Se ha producido un error");
          }else{
            valor.price = parseInt(this.price);
            alert("Cambiado el precio con éxito");
          }
        }
      });
    }else{
      alert("No se ha cambiado el precio");
    }
    console.table(this.cocinas);
  }

}

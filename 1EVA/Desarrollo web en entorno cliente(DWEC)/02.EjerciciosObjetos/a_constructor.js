function articulo (codArti,descArti,stockArti,precioArti) {
    this.codArti = codArti;
    this.descArti = descArti;
    this.stockArti = stockArti;
    this.precioArti = precioArti;
    this.comprarArti = () => {
        let numUniArti = Number(prompt("Comprar cantidad: "));
        alert(`sotck comprado: ${articulo.stockArti = articulo.stockArti + numUniArti}`);
        while(confirm("Deseas pedir más: ")){
                numUniArti = Number(prompt("Comprar cantidad: "));
                alert(`sotck comprado: ${articulo.stockArti = articulo.stockArti + numUniArti}`);
                
            }
        alert(`Cantidad comprada = ${articulo.stockArti}`);
    }
}

const NIKE = new articulo(Number(prompt("Número de código: ")), Number(prompt("Descuento: ")), 0, Number(prompt("Precio artículo: ")));
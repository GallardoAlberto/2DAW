let articulo = {
    codArti : Number(prompt("Número de código: ")),
    descArti : Number(prompt("Descuento: ")),
    stockArti : 0,
    precioArti : Number(prompt("Precio artículo: ")),
    comprarArti : () => {
        let numUniArti = Number(prompt("Comprar cantidad: "));
        alert(`sotck comprado: ${articulo.stockArti = articulo.stockArti + numUniArti}`);
        while(confirm("Deseas pedir más: ")){
                numUniArti = Number(prompt("Comprar cantidad: "));
                alert(`sotck comprado: ${articulo.stockArti = articulo.stockArti + numUniArti}`);
                
            }
        alert(`Cantidad comprada = ${articulo.stockArti}`);
    }
    
}

articulo.comprarArti();
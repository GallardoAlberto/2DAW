// A) Realiza un página web que pide mediante prompt() los valores para un artículo: codArti, descArti, stockArti y precioArti. Generar un objeto Articulo con esos datos como propiedades y además un método, denominado comprarArti, que permite incrementar el stock con un valor (numUniArti) pedido mediante prompt(). Se ejecutará un bucle que permita al usuario incrementar el stock, tantas veces como lo desee, saliendo del mismo mediante el uso de confirm().

// Se harán tres versiones, una con instancia directa sin new Object(), otra, una instancia directa con new Object() y una última con el uso de constructor. Los métodos se crearán mediante el uso de funciones anónimas.

// B) En la versión con constructor, transforma el método comprarArti, utilizando una función externa al objeto.

// C) En la versión que quieras, elimina la propiedad descripción mediante delete. Vuelve a crearla mediante defineProperty. (Elige el valor que quieras asignarle).

// D) Mediante el uso de un constructor vacío y modificando luego el prototipo, crea de nuevo el objeto con las características del punto A). Genera dos instancias, arti1 y arti2. Por último visualiza arti2 con formato json.


let articulo = new Object();
articulo.codArti = Number(prompt("Número de código: "));
articulo.descArti = Number(prompt("Descuento: "));
articulo.stockArti = 0;
articulo.precioArti = Number(prompt("Precio artículo: "));


articulo.comprarArti = () => {
    let numUniArti = Number(prompt("Comprar cantidad: "));

    alert(`sotck comprado: ${articulo.stockArti = articulo.stockArti + numUniArti}`);
    while(confirm("Deseas pedir más: ")){
            numUniArti = Number(prompt("Comprar cantidad: "));
            alert(`sotck comprado: ${articulo.stockArti = articulo.stockArti + numUniArti}`);
            
        }
    alert(`Cantidad comprada = ${articulo.stockArti}`);
}

articulo.comprarArti();

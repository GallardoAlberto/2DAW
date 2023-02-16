// Crea una página web que visualiza la fecha de hoy con el formato “Hoy es dd de mes_en_letras de año con 4 dígitos”, utilizando document.write().

// Se hará uso de una tabla con los meses del año en letras:


// var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];


// Un supermercado realiza un sorteo por cada compra superior a 50 euros realizada por sus clientes. El proceso es el siguiente:

// La cajera introduce el nombre del cliente.

// La cajera introduce el total de la compra.

// Si el total es menor o igual a 50€ se muestra en pantalla una mensaje del estilo: ¡Gracias por su compra, Nombre_Cliente!

// Si se cumple que la compra es mayor que 50€ se calcula un número aleatorio entre 1 y 25 (será el porcentaje descuento aplicado) 

//(y otro entre 1 y 31 (día del mes siguiente en que se aplicará el descuento, si el cliente realiza una compra ese día). 

//Hay que tener en cuenta que el número máximo del día depende del mes siguiente (pudiendo ser en realidad 28,29,30 o 31). 

// Finalmente se visualiza un mensaje del estilo: El próximo día de mes, tendrás un descuento de porcentaje%. Te esperamos, ¡Nombre de cliente!

// Prueba los ejemplos de los métodos toFixed y toPrecision del objeto number().

// Prueba los ejemplos de los métodos de string.

let fecha = new Date();
let dia = fecha.getDate();
let mesLetras =  new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date());
let mes = fecha.getMonth();
let anio = fecha.getFullYear();

document.write("Hoy es " + dia + " de " + mesLetras + " de " + anio + '<br><br>');

var diaDescuento = 0;
let descuento = Math.round(Math.random() * 25);

//              0       1          2      3      4       5       6        7         8           9         10           11
var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

if(meses[mes]){
    // meses con 31 días
    if(meses[0] || meses[2] || meses[4] || meses[6] || meses[7] || meses[9] || meses[11]){
        diaDescuento = Math.round(Math.random() * 31);
    // meses con 30 días
    }else if(meses[1] || meses[3] || meses[5] || meses[8] || meses[10]){
        diaDescuento = Math.round(Math.random()* 30);
    }else if(meses[1]){
        // si un año es bisiesto tiene 29 días
        if (((anio % 4 == 0) && (anio % 100 != 0 )) || (anio % 400 == 0)){
            diaDescuento = Math.round(Math.random() * 29);
        // si no febrero tiene 29 días
        }else{
            diaDescuento = Math.round(Math.random() * 28);
        }
    }
}

let cliente = {
    nombre : prompt("Nombre: "),
    total : Number(prompt("Total de la compra:"))
}

if(cliente.total <= 50){
    document.write(`<br>¡Gracias por su compra, ${cliente.nombre}!`);
}else{
    document.write(`<br>El próximo ${diaDescuento} de ${meses[mes + 1]} ,tendrás un descuento del ${descuento}%`);
}

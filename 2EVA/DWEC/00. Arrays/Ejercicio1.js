// Crea una tabla de 10 elementos

let tabla = new Array(10);

for (let i = 0; i < tabla.length; i++) {

    // Sus elementos son 10 números enteros entre 1 y
    // 100, generados de forma aleatoria con Math.random().
    
    tabla[i] = Math.trunc(Math.random() * 100);
    console.log(i + " - " + tabla[i]);

    // Visualiza un mensaje en el que se indica si contiene el valor 50 y de existir en que
    // posición del array se encuentra.

    if (tabla[i] == 50) {
        console.log("Es 50 la posición " + i + " del array");
    }
}

// Visualiza la posición del número mayor.

let mayor = 0;

for (let valor in tabla) {
    if(tabla[valor] > mayor){
        mayor = tabla[valor];
    }
}

console.log("El mayor es " + mayor);

// Visualiza el array ordenado de menor a mayor FALTA.

let aux;

console.log("---------TABLA ORDENADA----------");

for (let i = 0; i < tabla.length; i++) {
    for (let j = 0; j < tabla.length; j++) {
        if(tabla[j]>tabla[j+1]){
            //guardamos el numero mayor en el auxiliar
            aux=tabla[j];
            //guardamos el numero menor en el lugar correspondiente
            tabla[j]=tabla[j+1];
            //asignamos el auxiliar en el lugar correspondiente
            tabla[j+1]=aux;

       }
    }    
}

console.table(tabla);

// Visualiza la media.

let acum = 0;

for (let valor in tabla) {
    acum = acum + tabla[valor];
}

let media = acum / tabla.length;

console.log("La media es: "+ media);
// Realiza una página web que vaya pidiendo las temperaturas máximas del mes de
// octubre y las vaya guardando en un array de 31 elementos. Utilizar el método push

let temperaturaMax;

let temperaturaMaxOctubre = new Array();

let cont = 1;

while(cont < 32){
    temperaturaMax = Number(prompt("Temperatura maxíma del día " + cont));
    cont++;
    temperaturaMaxOctubre.push(temperaturaMax);

}

// Comprueba si en la segunda quincena del mes se encuentra la temperatura 21
// grados. Utilizar método includes
console.log(temperaturaMaxOctubre.includes(21, 15));

// Comprueba si existe la temperatura de 8 grados. Utilizar método indexof. Repite con
// el método lastindexof y por último con includes

console.log(temperaturaMaxOctubre.indexOf(8));
console.log(temperaturaMaxOctubre.lastIndexOf(8));
console.log(temperaturaMaxOctubre.includes(8));

// Comprueba si existe la temperatura de 10 grados. Utilizar método indexof. En caso
// de existir modifica la temperatura a 11 utilizando el método splice.

let cambioG = temperaturaMaxOctubre.indexOf(10);
console.log(cambioG);

if(cambioG != -1){
    temperaturaMaxOctubre.splice(cambioG, 1, 11);
}

// Elimina las temperaturas de los días 8 y 9 de octubre y sustituyelas por dos nuevas
// temperaturas. Las temperaturas borradas se guardarán en una nueva tabla. Utilizar
// método splice.
let miniTemp = new Array();

miniTemp.push(temperaturaMaxOctubre.splice(7, 1, 100), temperaturaMaxOctubre.splice(8, 1, 100));

console.table(miniTemp);

// Elimina la primera y la última temperatura del array. Utilizar métodos pop y shift.

console.log(temperaturaMaxOctubre.pop());
console.log(temperaturaMaxOctubre.shift());

console.table(temperaturaMaxOctubre);

// Convierte el array en un string, asignando como carácter separador |. Utilizar el
// método join.

let cadena = temperaturaMaxOctubre.join("|");
console.log(cadena);

// Ordena el array con el método sort.

temperaturaMaxOctubre.sort((a,b) => a -b);

// Invierte el orden del array. Utilizar método reverse.

temperaturaMaxOctubre.reverse();

// Añade al final las temperaturas mínimas del mes de octubre. Utilizar método concat.
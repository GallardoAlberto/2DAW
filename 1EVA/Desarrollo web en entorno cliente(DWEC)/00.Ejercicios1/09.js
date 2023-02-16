// Ejercicio 1: Visualiza la suma de todos los números impares entre 1 y 100.

let cont = 0;
let acumulador = 0;

for (let index = 0; index < 100; index++) {
    if (cont % 2 != 0) {
        acumulador = acumulador + cont;
    }
    cont++;
}
console.log(acumulador);

// Ejercicio 2: Visualiza  el número y la suma de todos los múltiplos de 7 entre 1 y 100

let cont1 = 0;
let acumulador1 = 0;

for (let index = 0; index < 100; index++) {
    if (cont1 % 7 == 0) {
        console.log(cont1);
        acumulador1 = acumulador1 + cont1;
    }
    cont1++;
}
console.log(acumulador1);



// Ejercicio 3: El número de narcisos se refiere a un número de 
// 3 dígitos cuando la suma de los dígitos a la potencia de 3
//  es igual a sí mismo. (Por ejemplo: 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 153), visualiza todos los números de narcisos.



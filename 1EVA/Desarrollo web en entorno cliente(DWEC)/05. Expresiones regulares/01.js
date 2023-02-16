// Validar un número…
// a. entero
// b. entero positivo
// c. binario
// d. hexadecimal

var esEntero = function esEntero(numeroEntero) {
    return /^[-+0-9][0-9]+$/gi.test(numeroEntero);
    };
    
let resultado = esEntero("+8876a2");
console.log (resultado);

var esPositivo = (numeroPositivo) => {
    return /^[+0-9][0-9]+$/gi.test(numeroPositivo);
}
    
let resultado1 = esPositivo("+188762");
console.log (resultado1);

var esBinario = (numeroBinario) => {
    return /^[+0-1]+$/gi.test(numeroBinario);
}
    
let resultado2 = esBinario("100101010101110");
console.log (resultado2);


var esHex = (numeroHex) => {
    return /^[0-9A-F]+$/gi.test(numeroHex);
}
    
let resultado3 = esHex("aaaa");
console.log (resultado3);
// 2. Validar una matrícula de coche europea (0000XXX)

var matricula = function matriculaCoche(numero) {
    return /^[0-9]{4}./gi.test(numero);
    };
    
let resultado = matriculaCoche("8876a2");
console.log (resultado);
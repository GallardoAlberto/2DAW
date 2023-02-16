let num1 = Number(prompt("Número 1"));

let num2 = Number(prompt("Número 2"));

let operacionDeseada = prompt("Que operación deseas hacer? ");

function operacion(numero1 , numero2, funcion){
    console.log(funcion(numero1, numero2));
}

function sumar(numero1, numero2){
    return numero1 + numero2;
}

function restar(numero1, numero2){
    return numero1 - numero2;
}

function multiplicar(numero1, numero2){
    return numero1 * numero2;
}

function dividir(numero1, numero2){
    return numero1 / numero2;
}


if(operacionDeseada == "+"){
    operacion(num1, num2 , sumar);
}
if(operacionDeseada == "-"){
    operacion(num1, num2 , sumar);
}
if(operacionDeseada == "*"){
    operacion(num1, num2 , sumar);
}
if(operacionDeseada == "/"){
    operacion(num1, num2 , sumar);
}
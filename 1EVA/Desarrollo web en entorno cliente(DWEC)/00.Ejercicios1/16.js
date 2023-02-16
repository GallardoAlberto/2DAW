// Visualiza los números pares existentes entre dos números solicitados mediante prompt(). 
// Comprobar que se introducen dos números comprendidos entre 1 y 100 y que el segundo es mayor que el  primero.

let num1 = parseInt(prompt(("Número 1")));

while( || String(num1)){
    num1 = prompt("Introduce del 1 al 99");
}

do {
    
} while (condition);
let num2 = parseInt(prompt(("Número 2")));

while(num1 > 100 && num1 < 2 && String(num2) || num2 < num1){
    if(num2 < num1){
        num2 = prompt("Tiene que ser mayor que el primer número introducido.");
    }
    if(num1 > 100 || num1 < 2 || String(num2) && num2 > num1){
        num1 = prompt("Introduce del 2 al 100");
    }
}

if(num1 < num2){
    for (let index = num1; index < num2 + 1; index++) {
        if(index % 2 == 0){
            console.log(index);
        }
    }
}
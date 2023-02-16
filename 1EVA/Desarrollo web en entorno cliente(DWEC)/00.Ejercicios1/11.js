//  10. Factorial
//  •  El factorial de un número entero n es una operación matemática que consiste en multiplicar
// todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! =5 x 4 x 3 x 2 x 1 = 120
//  • Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
// Se validará el número, obligando al usuario a introducir un número correcto.
//  • Una vez calculado un factorial, se le preguntará al usuario mediante el uso de confirm()
// si desea calcular el cálculo de otro factorial. El programa finaliza cuando el usuario pulsa el botón “No”.

var num = parseInt(
  prompt("Introduce el número del que quieras saber el factorial: ")
);

while (num < 0 || num !== Number(num)) {
  num = parseInt(prompt("Introduce algo válido. "));
}

let acum = 1;

for (let index = 1; index < num + 1; index++) {
  acum *= index;
}

console.log(acum);

while(confirm("Desea ver otro factorial: ") == true){
    num = parseInt(
        prompt("Introduce el número del que quieras saber el factorial: ")
      );
    
      while (num < 0 || num !== Number(num)) {
        num = parseInt(prompt("Introduce algo válido. "));
      }
    
      let acum = 1;
    
      for (let index = 1; index < num + 1; index++) {
        acum *= index;
      }
    
      console.log(acum);
}

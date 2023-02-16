// Realiza una página web que revisa el salario de un empleado, Se pedirá (prompt) los datos del empleado (Nombre, Apellidos, Edad y salario actual). No se validan los datos en una primera versión. La revisión del salario sigue las siguientes normas:

// Salarios > 2000, no se alteran.
// Salarios entre 1000 y 2000 se incrementan
// un 3% a los empleados > 45 años
// un 10% a los empleados con edad <= 45 años
// Salarios < 1000
// 	Los menores de 30 años pasan a cobrar 1100 euros
// 	A los empleados con edad comprendida entre 30 y 45 se aplica una subida del 3%
// 	A los mayores de 45 se les aplica un incremento del 15%.

let nombre = prompt("Nombre");
let apellidos = prompt("Apellidos");
let edad = Number(prompt("Edad"));
let salario = Number(prompt("Salario"));

console.log(`Datos de usuario ${nombre}, ${apellidos}, ${edad}, ${salario}'`);

if(salario > 2000){
    salario = salario;
}

if(salario >= 1000 && salario <= 2000){
    if(edad > 45){
        salario = salario * 1.03;
    }
    if(edad <= 45){
        salario = salario * 1.10;
    }
}

if(salario < 1000){
    if(edad < 30){
        salario = 1100;
    }
    if(edad <= 45 && edad >= 30){
        salario = salario * 1.03;
    }
    if(edad > 45){
        salario = salario * 1.15;
    }
}

alert(salario);
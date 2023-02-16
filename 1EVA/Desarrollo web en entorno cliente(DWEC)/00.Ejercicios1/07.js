// Realizar una página web que solicite al usuario introducir dos números. 
// A continuación se visualizará un mensaje con alert que indique cual es el mayor o en su caso si son iguales.

num1 = prompt("Número 1");
num2 = prompt("Número 2");

if(num1 > num2){
    alert(`el mayor es ${num1}`);
}else if (num1 === num2) {
    alert("Son iguales");
}else{
    alert(`el mayor es ${num2}`);
}
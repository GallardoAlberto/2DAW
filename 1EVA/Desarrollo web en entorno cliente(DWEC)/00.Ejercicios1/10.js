// El cálculo de la letra del Documento Nacional de Identidad (DNI) es un 
// proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23.
//  A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.El array de letras es:

// var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N','J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:

//     • Almacene en una variable el número de DNI indicado por el usuario y en otra variable la
//      letra del DNI que se ha indicado. Se pedirá al usuario que introduzca mediante  la función prompt(), el número y la letra de su DNI.
//     • En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso,
//      se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
//     • Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
//     • Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Sí no coinciden,
//      se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, 
//      se muestra un mensaje indicando que el número y la letra de DNI son correctos.

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N','J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let num_dni = Number(prompt("Número"));

let valorL;
let valorF;

if(num_dni > 99999999){
    console.log("Número no vádido.");
}else{
    let letra = prompt("Letra");
    console.log(`${num_dni}`+`${letra}`);
    valorL = num_dni % 23;
    valorF = letras[valorL];    

    if(letra == valorF){
        console.log("Correcto");
    }else{
        console.log("Dni no válido");
    }
}







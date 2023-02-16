// Construir un script insertado en una página HTML que calcule la superficie en metros cuadrados de una pared. 

// - El script debe pedir primero al usuario la altura de la pared en metros. El programa finaliza cuando el usuario pulse la letra “N” en lugar de la altura de la pared. 
// Se utilizará la función prompt() con el mensaje “Teclee metros o pulse ‘N’ para finalizar”. 

// - A continuación debe pedir al usuario (con prompt()) la anchura de la pared en metros
//  y guardar el valor en otra variable.

// - Después debe multiplicar la altura por la anchura y presentar al usuario los metros cuadrados de superficie de la pared utilizando document.write(...)

var altura = parseInt(prompt("Teclee metros o pulse ‘N’ para finalizar"));
console.log(altura);

if(altura == Number(altura)){
    let anchura =  parseInt(prompt("la anchura de la pared en metros"));
    alert("metros cuadrados = " + altura * anchura);
}
else{
    if(isNaN(altura) == true){
        let salir = altura.toString;
        console.log(salir);
    }
}


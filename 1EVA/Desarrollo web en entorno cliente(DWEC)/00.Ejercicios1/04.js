
    // • La página calcula un número aleatorio comprendido entre 1 y 100.
    // • Luego pide el número al usuario (prompt)
    // • Comprobar que el usuario ha introducido un número, mostrando un mensaje de error y volviendo a solicitar uno en caso de introducir un valor incorrecto (letras, el cuadro vacío o un número no comprendido entre 1 y 100).
    // • Si el número introducido por el usuario es correcto, se indica que acertó y el número de intentos necesitados.
    // • Si no lo es, se indica al usuario si el número es mayor o menor y se vuelve a pedir un número.
    // • Si se cancela cualquier cuadro, se da por finalizado el juego totalmente. (Ni siquiera se pregunta si el usuario desea volver a jugar), mostrando el mensaje “Has abandonado”.
    // • Si se adivina el número, se permite volver a jugar mediante cuadro de confirmación.

let numRandom = Math.round(Math.random()*100);
let num = 0;
let intentos = 0;
do {

    num = Number(prompt("Introduce un número del 1 al 100"));

    if(num == false){
        alert("Has abandonado");
        break;
    }else{
        while (num < 0 || num > 100 || num !== Number(num)) {
            num = parseInt(prompt("Introduce algo válido. "));
            }
        
            if (num > numRandom) {
                alert("Te has pasado");
            }
            if (num < numRandom) {
                alert("Te has quedado corto");
            }
            if ( num === numRandom){
                alert("Has acertado!")
            }        
            intentos++;
            alert("Intentos = " + intentos);
    }
} while (num != numRandom);


if(num == numRandom){

    while(confirm("Otra partida?") == true){
        let numRandom = Math.round(Math.random()*100);
        let num = 0;
        let intentos = 0;
        
        do {

            num = Number(prompt("Introduce un número del 1 al 100"));
        
            if(num == false){
                break;
            }else{
                while (num < 0 || num > 100 || num !== Number(num)) {
                    num = parseInt(prompt("Introduce algo válido. "));
                    }
                
                    if (num > numRandom) {
                        alert("Te has pasado");
                    }
                    if (num < numRandom) {
                        alert("Te has quedado corto");
                    }
                    if ( num === numRandom){
                        alert("Has acertado!")
                    }        
                    intentos++;
                    alert("Intentos = " + intentos);
            }

        } while (num != numRandom);

        if(num == false){
            alert("Has abandonado");
            break;
        }
    }
}

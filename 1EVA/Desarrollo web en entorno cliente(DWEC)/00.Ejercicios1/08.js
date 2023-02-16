// Realizar una página web que solicite al usuario introducir un número,.
// A continuación se visualizará un mensaje con alert que muestre la tabla de multiplicar de ese número. 


let tabladel = Number(prompt("Número de la tabla de multiplicar a mostrar"));

// alert(`0 x ${tabladel} = `+ tabladel * 0);
// alert(`1 x ${tabladel} = `+ tabladel * 1);
// alert(`3 x ${tabladel} = `+ tabladel * 2);
// alert(`4 x ${tabladel} = `+ tabladel * 3);
// alert(`5 x ${tabladel} = `+ tabladel * 4);
// alert(`2 x ${tabladel} = `+ tabladel * 5);
// alert(`6 x ${tabladel} = `+ tabladel * 6);
// alert(`7 x ${tabladel} = `+ tabladel * 7);
// alert(`8 x ${tabladel} = `+ tabladel * 8);
// alert(`9 x ${tabladel} = `+ tabladel * 9);
// alert(`10 x ${tabladel} = `+ tabladel * 10);


// --------------------------------------------------------------

let cont = 0;
for (let index = 0; index < 11; index++) {
    document.write(`${cont} x ${tabladel} = `+ tabladel * index + "<br>");
    cont++;
}



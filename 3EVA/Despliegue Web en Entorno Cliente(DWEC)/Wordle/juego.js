let arrayPalabraParaGanar = ['PASTA', 'CERVE', 'LLAVE', 'HUEVO', 'PISTA'];

let palabraGanadora = arrayPalabraParaGanar[Math.round(Math.random() * 4)];
console.log(palabraGanadora);
let juego = document.querySelector('.juego');
let campos = juego.querySelectorAll('div');

// teclado
let teclado = document.querySelector('.teclado');

let teclas = teclado.querySelectorAll('div');

let posicion = 0;

campos[posicion].focus();
campos[posicion].style.border = '2px solid blue';

for (let i = 0; i < teclas.length; i++) {
    
    teclas[i].addEventListener('click', (event) =>{
        console.log(event.target.innerHTML);
        
        if(event.target.innerHTML == 'Q'){
            console.log(posicion);
            posicion++;
            campos[posicion].focus();
            campos[posicion].style.border = '2px solid blue';
            campos[posicion-1].style.border = '2px solid #ced2d8';
            campos[posicion-1].innerHTML = 'Q';
        }
    })
    
}
// let cont = 0;

// let contarEnter = 0;


// for (let i = 0; i < palabra1_letras.length; i++) {

//     if (cont == i) {
//         palabra1_letras[i].focus();
//         palabra1_letras[i].style.border = '2px solid blue';
        
//         for (let j = 0; j < teclaf3.length; j++) {
    
//             teclaf3[j].addEventListener('click', ()=> {
//                 if(teclaf3[j].innerHTML == 'ENVIAR'){
 
//                 }
//             })

//         }
//     }
// }

// document.addEventListener('keydown', (event)=>{

//     if(event.key == 'q' || event.key == 'Q'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'Q';
//             cont++;
//             if (cont == palabra1_letras.length) {
//                 // si cont es igual al tamaño de las cajas en la fila actual, 
//                 // avanzar al siguiente conjunto de cajas
//                 cont = 0;

//             }
//             // Este if controla que se pueda pasar por el último visualViewport, sin que pete el contador
//             if(cont <= palabra1_letras.length -1){
//                 palabra1_letras[cont].focus();
//                 palabra1_letras[cont].style.border = '2px solid blue';
//             }
            
//         }
//         else if (cont == palabra1_letras.length) {
//             // si cont es igual al tamaño de las cajas en la primera fila, y estamos trabajando en la primera fila, 
//             // avanzar al siguiente conjunto de cajas (es decir, la segunda fila)
//             palabra2_letras[cont].focus();
//             palabra2_letras[cont].style.border = '2px solid blue';
//             palabra2_letras[cont].innerHTML = 'Q';
//             cont++;
//             if (cont == 0) {
//                 // si cont es igual al tamaño de las cajas en la fila actual, 
//                 // avanzar al siguiente conjunto de cajas
//                 palabra2_letras = document.querySelectorAll('.fila3 input');
//                 cont = 0;
                
//             }
//         }
//     }
    

//     if(event.key == 'w' || event.key == 'W'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'W';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'e' || event.key == 'E'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'E';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'r' || event.key == 'R'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'R';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 't' || event.key == 'T'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'T';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'y' || event.key == 'Y'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'Y';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'u' || event.key == 'U'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'U';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'i' || event.key == 'I'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'I';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'o' || event.key == 'O'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'O';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'p' || event.key == 'P'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'P';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'a' || event.key == 'A'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'A';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }
//     if(event.key == 's' || event.key == 'S'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'S';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }
//     if(event.key == 'd' || event.key == 'D'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'D';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }
//     if(event.key == 'f' || event.key == 'F'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'F';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }
//     if(event.key == 'g' || event.key == 'G'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'G';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }
//     if(event.key == 'h' || event.key == 'H'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'H';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }
//     if(event.key == 'j' || event.key == 'J'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'J';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }
//     if(event.key == 'k' || event.key == 'K'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'K';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }
//     if(event.key == 'l' || event.key == 'L'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'L';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }
//     if(event.key == 'ñ' || event.key == 'Ñ'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'Ñ';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'z' || event.key == 'Z'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'Z';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'x' || event.key == 'X'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'X';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'c' || event.key == 'C'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'C';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'v' || event.key == 'V'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'V';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'b' || event.key == 'B'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'B';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'n' || event.key == 'N'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'N';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'm' || event.key == 'M'){
//         if(cont < palabra1_letras.length){
//             palabra1_letras[cont].style.border = '2px solid #ced2d8';
//             palabra1_letras[cont].innerHTML = 'M';
//             cont++;
//             palabra1_letras[cont].focus();
//             palabra1_letras[cont].style.border = '2px solid blue';
//         }
//     }

//     if(event.key == 'Enter'){
//         cont = 0;
//         if(contarEnter <= 6){
//             contarEnter++;
//             if(contarEnter == 1){
//                 for (let i = 0; i < palabra1_letras.length; i++) {
//                     palabra1_letras[i].blur();
//                     palabra1_letras[i].style.border = '2px solid #ced2d8';
//                 }

//                 palabra2
//             }
//         }
//     }

//     if(event.key == 'Backspace'){
//         palabra1_letras[cont].style.border = '2px solid #ced2d8';
//         palabra1_letras[cont].innerHTML = '';
//         cont--;
//         palabra1_letras[cont].focus();
//         palabra1_letras[cont].style.border = '2px solid blue';
//     }

// });

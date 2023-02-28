let arrayPalabraParaGanar = ['Pasta', 'Cerve', 'Llave', 'Huevo', 'Pista', 'Juego', 'Cebra', 'Llama', 'Cinta', 'Piano', 'Nubes', 'Llano', 'Plaza', 'Banda', 'Llaga', 'Manga', 'Cuerda'];

let palabra1 = document.querySelector('.palabra1');
let palabra1_letras = palabra1.querySelector('div');

for (let i = 0; i < palabra1_letras.length; i++) {
    while()
    palabra1_letras[i].focus();    
    palabra1_letras[i].style.color = 'blue';
}
// teclado

let teclado = document.querySelector('.teclado');
let teclas = teclado.querySelectorAll('div');

teclas.forEach(i => {
    i.addEventListener('click', (event) =>{
        if(i.innerHTML == event.target.innerHTML){
            console.log(i.innerHTML);
        }
    })
});




let contenedor = document.getElementById('container');

// Al entrar en la caja cambia a verde
contenedor.addEventListener('mouseenter', () => {
    contenedor.style.backgroundColor = 'green';
})

// Al salir de la caja vuelve al color blanco
contenedor.addEventListener('mouseout', () => {
    contenedor.style.backgroundColor = 'white';
})

// Al presionar algun boton del raton, se ejecuta, si es el button = 0 es el click izq
contenedor.addEventListener('mousedown', (event) =>{
    if(event.button == 0){
        contenedor.style.backgroundColor = 'red';
    }
    if(event.button == 2){
        contenedor.style.backgroundColor = 'blue';
    }
})

// Al hacer click izquierdo
contenedor.addEventListener('contextmenu', (event) => {
    event.preventDefault();

})

// Al levantar el raton
contenedor.addEventListener('mouseup', () => {
    contenedor.style.backgroundColor = 'green';
})
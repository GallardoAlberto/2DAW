let caja1 = document.getElementById('arrastrar');
let caja2 = document.getElementById('destino');

// drag en caja1: opacidad caja1 al 50%

caja1.addEventListener('drag', () =>{
    caja1.style.opacity = '50%';
})

// dragend en caja1: opacidad caja1 al 100%
// color caja1 transparente

caja1.addEventListener('dragend', () =>{
    caja1.style.opacity = '100%';
    caja1.style.backgroundColor = 'transparent';
})

// dragenter en caja 2: color caja2 rojo

caja2.addEventListener('dragenter', ()=>{
    caja2.style.backgroundColor = 'red';
})

// dragleave en caja2: color caja2 transparente

caja2.addEventListener('dragleave', () =>{
    caja2.style.backgroundColor = 'transparent';
})

// dragover de la caja2: anular la acción por defecto de la caja 2 (vuelta a su sitio)

caja2.addEventListener('dragover', (event) =>{
    event.preventDefault();
})

// drop en la caja2: borrar caja1, poner texto ¡Lo has conseguido! en caja 2, volver a poner el
// fondo de la caja2 en amarillo

caja2.addEventListener('drop', () =>{
    caja1.remove();
    caja2.style.backgroundColor = 'yellow';
    caja2.innerHTML = '<h2>¡Lo has conseguido!</h2>'
    caja2.style.margin = '100px 600px';

})
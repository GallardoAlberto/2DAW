// capturamos la caja que deseamos mover
let hola = document.getElementById('cHola');

// Creamos un evento, que afecte en todo el documento o en la ventana,
// con una funcion de callback, que le pasamos como parametro una variable que 
// su valor varia segun la posicion, por los metodos que le damos abajo y lo
// contenamos con un string para que aplique el estilo en px

document.addEventListener('mousemove', (evento)=> {
    hola.style.marginLeft = evento.clientX + 'px';
    hola.style.marginTop = evento.clientY + 'px';

})
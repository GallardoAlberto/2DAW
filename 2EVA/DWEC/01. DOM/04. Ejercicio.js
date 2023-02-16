let newParrafo = document.createElement('p');
let newParrafo1 = document.createElement('p');
let newParrafo2 = document.createElement('p');

let articulo = document.getElementById('articulo');

let contenido = document.createTextNode("Hola Gatito");
let bolder = document.createElement('b');
let contenido1 = document.createTextNode(` Hola Mundo`);
let contenido2 = document.createTextNode("Hola Gatito");
let pieDePag = document.getElementById('main-footer');

pieDePag.appendChild(newParrafo2);
newParrafo2.appendChild(contenido2);

articulo.appendChild(newParrafo);
newParrafo.appendChild(contenido);

articulo.appendChild(newParrafo1);
newParrafo1.appendChild(bolder);
bolder.appendChild(contenido1);
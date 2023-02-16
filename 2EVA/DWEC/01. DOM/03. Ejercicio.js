let informacion = document.getElementById('informacion');
let pepe = "me llamo Pepito";
informacion.innerHTML = `
Hola, ${pepe}`;

let parrafos = document.getElementsByTagName('p');
// console.log(parrafos.length);

// for (const i in parrafos) {
//     console.log(parrafos[i].textContent);
// }

let articulos = document.getElementById('articulo');
let parrafosArticle = articulos.getElementsByTagName('p');
console.log(parrafosArticle.length);

let contenidoUltimoP = parrafos[3].textContent;
// console.log(contenidoUltimoP);

let contenidoUltimoArticle = parrafosArticle[2].textContent;
// console.log(contenidoUltimoArticle);

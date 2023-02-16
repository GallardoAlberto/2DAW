// Crea una página web que muestre un color de fondo aleatorio cada vez que entremos en ella. 

// Utilizaremos:
//     • Una capa que ocupe todo el fondo de la página utilizando CSS para indicar el tamaño de la zona
//     • La función CSS denominada rgb() para asignar el color. Ten en cuenta que rgb() utiliza números enteros comprendidos entre 0 y 255.
//     • El objeto de javascript Math, y concretamente su método random.(Math.random() devuelve un número decimal entre 0 y 1). 


let numeroRGB1 = Math.round(Math.random()*255);
let numeroRGB2 = Math.round(Math.random()*255);
let numeroRGB3 = Math.round(Math.random()*255);

console.log(numeroRGB1);
console.log(numeroRGB2);
console.log(numeroRGB3);

document.body.style.backgroundColor = `rgb(${numeroRGB1},${numeroRGB2},${numeroRGB3})`;
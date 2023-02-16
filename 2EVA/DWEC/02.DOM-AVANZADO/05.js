// Quita el atributo class a todos los elementos a los que se le aplique la clase .cuerporec
// mediante el uso de .removeAttribute.
// Vuelvelo a poner con .setAttribute.
// Vuelvelo a quitar con .toggleAttribute.


let cuerpo = document.querySelectorAll('.cuerporec');

cuerpo[0].removeAttribute('class');
cuerpo[1].removeAttribute('class');
console.log(cuerpo[0].getAttribute('class'));
console.log(cuerpo[1].getAttribute('class'));


cuerpo[0].setAttribute('class', 'cuerporec');
cuerpo[1].setAttribute('class', 'cuerporec');
console.log(cuerpo[0].getAttribute('class'));
console.log(cuerpo[1].getAttribute('class'));

cuerpo[0].toggleAttribute('class');
cuerpo[1].toggleAttribute('class');
console.log(cuerpo[0].getAttribute('class'));
console.log(cuerpo[1].getAttribute('class'));

console.log(cuerpo.length);
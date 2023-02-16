let ejemplo = document.querySelector('#ejemplo');
ejemplo.setAttribute('data-atributo-que-no-existe', 'ahora existo');
ejemplo.setAttribute('data-atributo-sin-valor', 'Ahora tengo valor');

console.log(ejemplo.getAttribute('data-atributo-que-no-existe'));
console.log(ejemplo.getAttribute('data-atributo-sin-valor'));



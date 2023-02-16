let nombreInt = prompt("Introduce nombre");
let pesoInt = prompt("Introduce peso: ");
let sexo = prompt("Introduce sexo H o M:");
let animal = new Object();
animal.ingesta = 0;
animal.nombre = nombreInt;
animal.peso = pesoInt;
// animal.calculo = function(){
//     return this.ingesta = 50 * this.peso;
// }

delete animal.ingesta;

// Anadir elemento a un objeto
Object.defineProperty(animal, 'sexo', {value: sexo, writable: true});

while(animal.sexo != 'M' && animal.sexo != 'H'){
    animal.sexo = prompt("Introduce H o M");
}

for (let i in animal) {
    document.write(`${i} - ${animal[i]} <br>`);
}

console.log(animal.sexo);
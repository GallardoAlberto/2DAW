function animal(nombre, peso) {
    this.nombre = nombre;
    this.peso = peso;
}
const PERRO = new animal('perro', 45);
const GATO = new animal('gato', 14);

console.log(PERRO.nombre + PERRO.peso);
console.log(GATO.nombre + GATO.peso);


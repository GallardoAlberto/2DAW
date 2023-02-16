// declaro objeto
let coche = {
    color : "Rojo",
    marca : "Ford",
    modelo : "Mondeo",
    matricula : "3421 CMG",
    velocidad : 0
}
// creo metodo, con funcion anónima.
coche.mostrarDatos = function(){
    return `${coche.color}, ${coche.marca}, ${coche.modelo}, ${coche.matricula}`;
}

coche.acelerar = function(){
    return `<br>Velocidad = ${coche.velocidad = coche.velocidad + 10}`;
}

console.log(coche.mostrarDatos());

console.log(coche.acelerar());
console.log(coche.acelerar());
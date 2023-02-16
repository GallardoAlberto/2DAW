// declaro objeto
let coche = new Object();
coche.color = "Rojo";
coche.marca = "Ford";
coche.modelo = "Mondeo";
coche.matricula = "3421 CMG";
coche.velocidad = 0;

// creo metodo, con funcion anónima.
coche.mostrarDatos = function(){
    return `${coche.color}, ${coche.marca}, ${coche.modelo}, ${coche.matricula}`;
}

coche.acelerar = function(){
    return `<br>Velocidad = ${coche.velocidad = coche.velocidad + 10}`;
}

document.write(coche.mostrarDatos());

document.write(coche.acelerar());
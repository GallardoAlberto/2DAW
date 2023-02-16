num = Number(prompt("Número: "));

while (!Number(num)) {
  num = Number(prompt("Inserta un número, por favor: "));
}

function calcular(numero, funcion) {

  console.log(funcion(numero));
}

function doble(numero) {
  return numero * 2;
}

function triple(numero) {
  return numero * 3;
}


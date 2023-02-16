function esPrimo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return console.log(false);
      }
    }
        if (numero !== 1) {
        return console.log(true);
      }

}
dato = Number(prompt("Introduce un número"));
do {
    esPrimo(dato);
    dato = Number(prompt("Introduce un número"));
    if(!Number(dato)){
        dato = null;
    }
} while (dato != null);
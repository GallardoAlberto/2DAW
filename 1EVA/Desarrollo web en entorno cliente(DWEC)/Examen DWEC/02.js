let nombre = prompt("Nombre");
while(!/[A-Z]{1}[a-z]{0,}\s?[A-Z]{0}[a-z]{0,}$/.test(nombre)){
    nombre = prompt("Nombre no válido, prueba otro nombre.");
}

while(nombre != null){
  let sexo = prompt("Sexo");
  while (!/[F|M]/.test(sexo)) {
    sexo = prompt("Sexo (F o M):");
  }
  let altura = Number(prompt("Altura: "));
  while (altura < 100 || altura > 250) {
    altura = Number(prompt("Introduce una altura entre 100 y 250: "));
  }
  let peso = Number(prompt("Peso: "));

  let contIMCMayor = 0;
  let contIMCMenor = 0;

  let operacion = (peso / Math.pow(altura, 2)) * 10000;
  operacion = operacion.toFixed(2);

  if (sexo == "F") {
    if (operacion <= 24) {
      alert("Su IMC no supera el recomendable, no debe ir al médico.");
      contIMCMenor++;
    } else {
      alert("Su IMC supera el recomendable, debe ir al médico.");
      contIMCMayor++;
    }
  }
  if (sexo == "M") {
    if (operacion <= 25) {
      alert("Su IMC no supera el recomendable, no debe ir al médico.");
      contIMCMenor++;
    } else {
      alert("Su IMC supera el recomendable, debe ir al médico.");
      contIMCMayor++;
    }
  }
  nombre = prompt("Si quieres continuar, introduce otro nombre y si quieres parar pulsa cancelar: ");
  if(nombre == null){
    if (contIMCMayor > contIMCMenor) {
        alert("El número de personas que superan el IMC es elevado");
      }
  }else{
    while(!/[A-Z]{1}[a-z]{0,}\s?[A-Z]{0}[a-z]{0,}$/.test(nombre)){
        nombre = prompt("Nombre no válido, prueba otro nombre.");
    }
  }
  
}



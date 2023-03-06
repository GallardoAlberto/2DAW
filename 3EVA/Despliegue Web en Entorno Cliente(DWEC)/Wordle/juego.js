let arrayPalabraParaGanar = ["PASTA", "CERVE", "LLAVE", "HUEVO", "PISTA"];

let palabraGanadora = arrayPalabraParaGanar[Math.round(Math.random() * 4)];
console.log(palabraGanadora);
let juego = document.querySelector(".juego");
let campos = juego.querySelectorAll("div");

// teclado
let teclado = document.querySelector(".teclado");

let teclas = teclado.querySelectorAll("div");

let posicion = 0;

campos[posicion].focus();
campos[posicion].style.border = "3px solid blue";

let palabraUser = [];

let enviar = false;

let contadorenviar = 0;

for (let i = 0; i < teclas.length; i++) {
  teclas[i].addEventListener("click", (event) => {
    console.log(event.target.innerHTML);
    console.log(posicion);

    if (event.target.innerHTML == teclas[i].innerHTML) {
      if (posicion % 5 == 0 && posicion != 0) {
        if (event.target.innerHTML == "ENVIAR") {

          if(posicion != 30){
            campos[posicion].style.border = "3px solid blue";
          }
          posicion++;
          enviar = true;

          if (contadorenviar == 0) {
            for (let j = 0; j < 5; j++) {
              campos[j].style.color = "white";

              if (palabraGanadora.includes(palabraUser[j])) {
                campos[j].style.backgroundColor = "#e4a81d";
              } else if (
                palabraGanadora.includes(palabraUser[j]) &&
                palabraUser[j] != palabraGanadora[j]
              ) {
                campos[j].style.backgroundColor = "#757575";
              } else {
                campos[j].style.backgroundColor = "#757575";
              }
              if (palabraUser[j] == palabraGanadora[j]) {
                campos[j].style.backgroundColor = "#43a047";
              }
            }

          }

          if (contadorenviar == 1) {
            for (let j = 5; j < 10; j++) {
              campos[j].style.color = "white";

              console.log(palabraUser[j])
              if (palabraGanadora.includes(palabraUser[j - 5])) {
                campos[j].style.backgroundColor = "#e4a81d";
              } else if (
                palabraGanadora.includes(palabraUser[j - 5]) &&
                palabraUser[j - 5] != palabraGanadora[j - 5]
              ) {
                campos[j].style.backgroundColor = "#757575";
              } else {
                campos[j].style.backgroundColor = "#757575";
              }
              if (palabraUser[j - 5] == palabraGanadora[j - 5]) {
                campos[j].style.backgroundColor = "#43a047";
              }
            }

          }

          if (contadorenviar == 2) {
            for (let j = 10; j < 15; j++) {
              campos[j].style.color = "white";

              console.log(palabraUser[j])
              if (palabraGanadora.includes(palabraUser[j - 10])) {
                campos[j].style.backgroundColor = "#e4a81d";
              } else if (
                palabraGanadora.includes(palabraUser[j - 10]) &&
                palabraUser[j - 10] != palabraGanadora[j - 10]
              ) {
                campos[j].style.backgroundColor = "#757575";
              } else {
                campos[j].style.backgroundColor = "#757575";
              }
              if (palabraUser[j - 10] == palabraGanadora[j - 10]) {
                campos[j].style.backgroundColor = "#43a047";
              }
            }

          }

          if (contadorenviar == 3) {
            for (let j = 15; j < 20; j++) {
              campos[j].style.color = "white";

              console.log(palabraUser[j])
              if (palabraGanadora.includes(palabraUser[j - 15])) {
                campos[j].style.backgroundColor = "#e4a81d";
              } else if (
                palabraGanadora.includes(palabraUser[j - 15]) &&
                palabraUser[j - 15] != palabraGanadora[j - 15]
              ) {
                campos[j].style.backgroundColor = "#757575";
              } else {
                campos[j].style.backgroundColor = "#757575";
              }
              if (palabraUser[j - 15] == palabraGanadora[j - 15]) {
                campos[j].style.backgroundColor = "#43a047";
              }
            }

          }
          
          if (contadorenviar == 4) {
            for (let j = 20; j < 25; j++) {
              campos[j].style.color = "white";

              console.log(palabraUser[j])
              if (palabraGanadora.includes(palabraUser[j - 20])) {
                campos[j].style.backgroundColor = "#e4a81d";
              } else if (
                palabraGanadora.includes(palabraUser[j - 20]) &&
                palabraUser[j - 20] != palabraGanadora[j - 20]
              ) {
                campos[j].style.backgroundColor = "#757575";
              } else {
                campos[j].style.backgroundColor = "#757575";
              }
              if (palabraUser[j - 20] == palabraGanadora[j - 20]) {
                campos[j].style.backgroundColor = "#43a047";
              }
            }

          }

          if (contadorenviar == 5) {
            for (let j = 25; j < 30; j++) {
              campos[j].style.color = "white";

              console.log(palabraUser[j])
              if (palabraGanadora.includes(palabraUser[j - 25])) {
                campos[j].style.backgroundColor = "#e4a81d";
              } else if (
                palabraGanadora.includes(palabraUser[j - 25]) &&
                palabraUser[j - 25] != palabraGanadora[j - 25]
              ) {
                campos[j].style.backgroundColor = "#757575";
              } else {
                campos[j].style.backgroundColor = "#757575";
              }
              if (palabraUser[j - 25] == palabraGanadora[j - 25]) {
                campos[j].style.backgroundColor = "#43a047";
              }
            }

          }

          contadorenviar++;
          
          palabraUser = [];

        }
      } else {
        if (event.target.innerHTML != "ENVIAR") {
          if (enviar == true) {
            enviar = false;
          } else {
            posicion++;
          }

          if(posicion != 30){
            campos[posicion].focus();
            campos[posicion].style.border = "3px solid blue";
          }
          campos[posicion - 1].style.border = "3px solid #ced2d8";
          campos[posicion - 1].innerHTML = event.target.innerHTML;
          palabraUser.push(campos[posicion - 1].innerHTML);

          console.table(palabraUser);

          if (posicion % 5 == 0 && posicion != 30) {
            campos[posicion].style.border = "3px solid #ced2d8";
          }
        }
      }
    }
  });
}

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  const regex = /[^a-zA-Z]/;

  // para solo admitir letras, y que no esten incluidas las teclas especiales
  if (
    !regex.test(event.key) &&
    !event.altKey &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    event.key !== "CapsLock" &&
    event.key !== "Tab" &&
    event.key !== "Enter" &&
    event.key !== "AltGraph" &&
    event.key !== "Backspace"
  ) {
    console.log(posicion);
    posicion++;
    campos[posicion].focus();
    campos[posicion].style.border = "3px solid blue";
    campos[posicion - 1].style.border = "3px solid #ced2d8";
    campos[posicion - 1].innerHTML = event.key.toUpperCase();
  }
});

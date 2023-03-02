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
campos[posicion].style.border = "2px solid blue";

let palabraUser = [];

let enviar = false;

for (let i = 0; i < teclas.length; i++) {
    teclas[i].addEventListener("click", (event) => {
      console.log(event.target.innerHTML);
      console.log(posicion);
  
      if (event.target.innerHTML == teclas[i].innerHTML) {
        if (posicion % 5 == 0 && posicion != 0) {
          if (event.target.innerHTML == "ENVIAR") {
            campos[posicion].style.border = "2px solid blue";
            posicion++;
            enviar = true;
  
            for (let i = posicion - 5; i < palabraGanadora.length; i++) {
              console.log(palabraUser[i]);
  
              if (campos[i].innerHTML != palabraUser[i]) {
                campos[i].style.backgroundColor = "red";
              }
            }
  
            palabraUser = [];
  
          }
        } else {
          if (event.target.innerHTML != "ENVIAR") {
            if (enviar == true) {
              enviar = false;
            } else {
              posicion++;
            }
  
            campos[posicion].focus();
            campos[posicion].style.border = "2px solid blue";
            campos[posicion - 1].style.border = "2px solid #ced2d8";
            campos[posicion - 1].innerHTML = event.target.innerHTML;
            palabraUser.push(campos[posicion - 1].innerHTML);
  
            console.table(palabraUser);
  
            if (posicion % 5 == 0) {
              campos[posicion].style.border = "2px solid #ced2d8";
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
    campos[posicion].style.border = "2px solid blue";
    campos[posicion - 1].style.border = "2px solid #ced2d8";
    campos[posicion - 1].innerHTML = event.key.toUpperCase();
  }
});

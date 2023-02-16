let enviar = document.querySelector('button[name="guardar"]');
let pregunta = document.querySelector("#pregunta");
let respuesta = document.querySelector("#respuesta");

let arrayExamen = [];

enviar.addEventListener("click", (evento) => {
  evento.preventDefault();
  arrayExamen.push({pregunta: pregunta.value,respuesta: respuesta.value });
  console.table(arrayExamen);

  pregunta.value = "";
  respuesta.value = "";

  let crear = document.querySelector("#conform");
  let examenFinal = document.querySelector("#convisu");

  if (arrayExamen.length >= 5) {
    crear.style.display = "none";
    examenFinal.classList.remove('hidden');


    for (let i = 1; i < arrayExamen.length + 1; i++) {
        let pre = document.createElement('p');
        pre.textContent = "Pregunta " + i + ": " + arrayExamen[i - 1].pregunta;
        examenFinal.appendChild(pre);

        let res = document.createElement('p');
        res.textContent = "Respuesta: " + i + ": " + arrayExamen[i - 1].respuesta;
        examenFinal.appendChild(res);

        res.className = "respuestasParrafos";

        let parrafos = examenFinal.getElementsByClassName('respuestasParrafos');

        console.log(parrafos);

        document.addEventListener('dblclick', (event)=>{
            if(event.target.className == "respuestasParrafos"){
                event.target.remove();
            }
        })
    }
  }
});

// Pide los nombres de los alumnos matriculados en el curso 2º DAW y los va
// guardando en un array

let arrayAlumnos = new Array();

let alumno = prompt("Nombre alumno que vas ha matricular: ");

// Se finaliza la introducción de nombres cuando el usuario
// pulse cancel

let cont = 1;

while (alumno != null) {
    arrayAlumnos[cont] = alumno;
    cont++;

    alumno = prompt("Si quieres matricular seguir matriculando, introduce otro nombre: ");
}

for (let valor in arrayAlumnos) {
    console.table(valor + " " + arrayAlumnos[valor]);
}

// Visualiza un mensaje con el número de alumnos matriculados
alert("Número de alumnos matriculados: " + (arrayAlumnos.length - 1));

// Se realizará un nuevo bucle en el que se solicitará número de alumno
let numero = prompt("Número de alumno: ");

// El número deberá estar entre 1 y el número de alumnos introducidos
while(numero > arrayAlumnos.length - 1 || numero < 1){
    numero = prompt("Introduce un número valido(MAXIMO EL NUMERO DE MATRICULADOS)");
}

// Se visualizará el nombre correspondiente al número introducido.

alert("El alumno " + numero + " es: " + arrayAlumnos[numero]);

// ¿Desea continuar consultando nombres de alumnos?

while(confirm("¿Desea continuar consultando nombres de alumnos?") != false){

    numero = prompt("Número de alumno: ");

    while(numero > arrayAlumnos.length - 1 || numero < 1){
        numero = prompt("Introduce un número valido(MAXIMO EL NUMERO DE MATRICULADOS)");
    }

    alert("El alumno " + numero + " es: " + arrayAlumnos[numero]);

}

// Por último se realizará un nuevo bucle en el que se solicitará número de alumno a dar de baja.

let baja = prompt("Número de alumno que quiere dar de baja: ");

// El número deberá estar entre 1 y el número de alumnos introducidos.

while(baja > arrayAlumnos.length - 1 || baja < 1){
    baja = prompt("Introduce un número valido(MAXIMO EL NUMERO DE MATRICULADOS)");
}
alert("El alumno " + baja + " que es: " + arrayAlumnos[baja] + ", dado de baja");

arrayAlumnos[baja] = null;

// Está acción se repite hasta que el usuario contesta de forma negativa a una pregunta del tipo “¿Desea continuar dando de baja?”

let cadena = "";

while(confirm("¿Desea continuar dando de baja?") != false){

    baja = prompt("Número de alumno que quiere dar de baja: ");

    while(baja > arrayAlumnos.length - 1 || baja < 1){
        baja = prompt("Introduce un número valido(MAXIMO EL NUMERO DE MATRICULADOS)");
        while(arrayAlumnos[baja] == null){
            baja = prompt("Este usuario ya ha sido dado de baja, introduce otro número)");
        }
    }

    alert("El alumno " + baja + " que es: " + arrayAlumnos[baja] + ", dado de baja");

    arrayAlumnos[baja] = null;

}

    // Visualizar las posiciones que han quedado libres.

for (let valor in arrayAlumnos) {
    if(arrayAlumnos[valor] == null){
        cadena = cadena + "|" + valor + "| ";
    }
}
alert("Las matrículadas dadas de baja son: " + cadena);


// Visualiza el nombre de los alumnos contenidos en la tabla. No deben aparecer los
// no definidos. Repite esta acción tres veces, empleando cada una de las tres
// estructuras for conocidas para recorrer .

document.write(`<h1>FOR</h1>`);
for (let i = 0; i < arrayAlumnos.length; i++) {
    if(arrayAlumnos[i] != null){
        document.write(`<p>- ${arrayAlumnos[i]}</p>`);
    }
}

document.write(`<h1>FOR-OF</h1>`);
for (let valor of arrayAlumnos) {
    if(valor != null || valor != undefined){
        document.write(`<p>- ${valor}</p>`);
    }
}


document.write(`<h1>FOR-IN</h1>`)
for (const valor in arrayAlumnos) {
    if(arrayAlumnos[valor] != null){
        document.write(`<p>- ${arrayAlumnos[valor]}</p>`);
    }
}

let alumnos = new Array();
let notas = [];
// let mediaNota = [];
let notasAlumno = [[alumnos],[notas]];

let eva1, eva2, eva3;

// Un listado de todos los alumnos en el que aparezca el nombre del alumno y su nota media.

function calcularMedia(){
    return Math.round((eva1 + eva2 + eva3) / 3);
}

// El nombre del alumno con la nota más alta en cualquiera de las evaluaciones.

function notaAlta(){

    let mayor = 0;
    for (let i = 0; i < notas.length; i++) {
        if(notas[i].EVA1 < mayor){
            mayor = notas[i].EVA1;
        }
        if(notas[i].EVA2 < mayor){
            mayor = notas[i].EVA2;
        }
        if(notas[i].EVA3 < mayor){
            mayor = notas[i].EVA3;
        }
    }
    document.write("Nota más alta - " +mayor);
}

// Un listado de todos los alumnos en el que aparezca el nombre del alumno y su nota media en letras (SB,NT,BI,SF,IN,MD).

function notaL(){
    if(calcularMedia() == 10 || calcularMedia() == 9){
        return console.log("SB");
    }
    if(calcularMedia() == 8 || calcularMedia() == 7){
        return console.log("NT");
    }
    if(calcularMedia() == 6){
        return console.log("BI");
    }
    if(calcularMedia() == 4){
        return console.log("IN");
    }
    if(calcularMedia() < 4){
        return console.log("MD");
    }
}

do{

    let alumno = prompt("Nombre alumno: ");
    alumnos.push(alumno);

    eva1 = Number(prompt("Nota 1ª EVA:"));

    while(eva1 > 10 || eva1 < 1 || !Number(eva1)){
        eva1 = Number(prompt("Introduce un número de 1 a 10"));
    }

    eva2 = Number(prompt("Nota 2ª EVA:"));

    while(eva2 > 10 || eva2 < 1 || !Number(eva2)){
        eva2 = Number(prompt("Introduce un número de 1 a 10"));
    }


    eva3 = Number(prompt("Nota 3ª EVA:"));

    while(eva3 > 10 || eva3 < 1 || !Number(eva3)){
        eva3 = Number(prompt("Introduce un número de 1 a 10"));
    }

// Un listado de todos los alumnos en el que aparezca el nombre del alumno y su nota media.

    console.log(calcularMedia());
    calcularMedia();

    let media = {
        alumno : alumno,
        media : calcularMedia()
    };

    // mediaNota.push(media);
    
    let eva = {
        EVA1 : eva1,
        EVA2 : eva2,
        EVA3 : eva3
    }

    notas.push(eva);

    // notaAlta();
    // notaL();
}while(confirm("Desea continuar?") == null)

for (let i = 0; i < notasAlumno.length; i++) {
    document.write(notasAlumno[i] + " ");
    for (let j = 0; j < notasAlumno.length; j++) {
        document.write(notasAlumno[j]);
    }
    
}
// console.table(mediaNota);
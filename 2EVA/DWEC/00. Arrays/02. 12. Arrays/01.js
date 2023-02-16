
let alumnos2DAW = new Array();
let alumnos = [];
let notas = [];
let matriculas = new Array();
let matricula;
let nombre;
let apellidos;
let ciclo;
let curso;

matricula = prompt("Matrícula: ");
matriculas.push(matricula);
let repetida;

let cursos = ["DAM", "DAW", "ASIR"];
let diw, dwec, dda, dws, eie, ing;
let modulos = new Array();

do{

    repetida = matriculas.includes(matricula);
    console.log(repetida);

    while(!/^[A-Z]{1}[0-9]{3}$/.test(matricula)){
        if(matricula == null){
            break;
        }
        matricula = prompt("Código de matrícula no válida, inserte una matrícula correcta.");
        
    }

    while(repetida != true){
        
        repetida = cursos.includes(ciclo);

    }
    matriculas.push(matricula);

    if(matricula != null){
        nombre = prompt("Introduce el nombre del alumno: ");
    
        while(!/^[A-Z]{1}[a-z]{1,}$/.test(nombre)){
            nombre = prompt("Introduce un nombre valido(Que comience por mayúscula)");
        }
    
        apellidos = prompt("Introduce los apellidos del alumno: ");
    
        while(!/[A-Z]{1}[a-z]{1,}[ -]{1}[A-Z]{1}[a-z]{1,}$/.test(apellidos)){
            apellidos = prompt("Introduce un nombre valido(Que sean 2 apellidos y empiece por mayúscula)");
        }
        
        ciclo = prompt("Que ciclo va ha cursar: ");
        let existe = cursos.includes(ciclo);
        while(existe != true){
            ciclo = prompt("Introduce un ciclo existente: ");
            existe = cursos.includes(ciclo);
        }

        curso = prompt("Introduce el curso al que pertenece:");
    
        while(!/^[1|2]{1}$/.test(curso)){
            curso = prompt("Ese curso no existe, por favor introduce 1º o 2º");
        }

        if(ciclo == "DAW" && curso == "2"){
            alumnos2DAW.push(nombre + " " + apellidos);
        }

    }else{
        break;
    }

    let alumno = {
        matricula : matricula,
        nombre : nombre,
        apellidos : apellidos,
        ciclo : ciclo,
        curso : curso
    }


        if(ciclo == "DAW" && curso == "2"){
            diw = Number(prompt("Nota de DAW"));
            dwec = Number(prompt("Nota de DWEC"));
            dda = Number(prompt("Nota de DDA"));
            dws = Number(prompt("Nota de DWS"));
            eie = Number(prompt("Nota de EIE"));
            ing = Number(prompt("Nota de ING"));

            modulos = {
                DIW : diw,
                DWEC : dwec,
                DDA : dda,
                DWS : dws,
                EIE : eie,
                ING : ing
            }

            notas.push(modulos);
        }
    

    alumnos.push(alumno);

    matricula = prompt("Si quieres introducir otro alumno, introduce otra matrícula: ");

    while(matriculas.includes(matricula)){
        matricula = prompt("Esta matricula ya existe, prueba otra. ");
        while(!/^[A-Z]{1}[0-9]{3}$/.test(matricula)){
            if(matricula == null){
                break;
            }
            matricula = prompt("Código de matrícula no válida, inserte una matrícula correcta.");
            if(!matriculas.includes(matricula)){
                matriculas.push(matricula);
            }
        }
    }


}while(matricula != null);

console.table(alumnos);
console.table(notas);
console.table(alumnos2DAW);
console.table(notas);

for (let i = 0; i < notas.length; i++) {
    alert(`BOLETIN DE NOTAS - - - ${alumnos2DAW[i]}


    DIW - ${notas[i].DIW}
    DWEC - ${notas[i].DWEC}
    DDA - ${notas[i].DDA}
    DWS - ${notas[i].DWS}
    EIE - ${notas[i].EIE}
    ING - ${notas[i].ING}`);
    
}

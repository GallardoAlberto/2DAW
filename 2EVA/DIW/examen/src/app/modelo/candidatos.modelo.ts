export class Candidatos{

    codCandidato : number;
    nombre : string;
    telefono : number;
    edad : number;
    especialidad : string;
    codNivel : Array<object>;
    experiencia : number;
    
    constructor(codCandidato : number ,nombre : string, telefono : number, edad : number ,especialidad : string, codNivel : Array<object>, experiencia : number){
        
        this.codCandidato = codCandidato;
        this.nombre = nombre,
        this.telefono = telefono,
        this.edad = edad,
        this.especialidad = especialidad,
        this.codNivel = codNivel,
        this.experiencia = experiencia
    }
} 
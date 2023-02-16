export class Libro {
    codigo : string;
    titulo : string;  
    autor : string;
    editorial : string;
    leido : boolean;
    
constructor (codigo : string, titulo: string, autor : string, editorial: string, leido : boolean){
    this.codigo = codigo;
    this.titulo = titulo;
    this.autor = autor;
    this.editorial = editorial;
    this.leido = leido;
    }
}
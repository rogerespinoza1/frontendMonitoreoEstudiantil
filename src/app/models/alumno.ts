export class Alumno {
    _id?: number;
    nombres: string;
    apellidos: string;
    edad:number;
    genero:string;
    promedio_pond:number;

    constructor(nombres: string,apellidos: string,edad:number,genero:string,promedio_pond:number) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.edad = edad;
        this.genero = genero;
        this.promedio_pond = promedio_pond;
    }
}
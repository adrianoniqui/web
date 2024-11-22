import Usuario from "./Usuario.js"

export default class Profesorr extends Usuario {
    constructor(nombre,apellido,correo,activo,cursosDictados,calificacion){
        super(nombre,apellido,correo,activo)
        this.cursosDictados = cursosDictados
        this.calificacion= calificacion
    }
}
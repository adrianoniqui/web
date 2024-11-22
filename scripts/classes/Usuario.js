export default class Usuario{
    // Constructor de la clase
    constructor(nombres, apellidos, correo, activo) {
      // Inicialización de propiedades
      this.nombres = nombres;
      this.apellidos = apellidos;
      this.correo = correo;
      this.activo = activo;
    }
  
    // Método para presentarse
    presentarse() {
      return `Hola, mi nombre es ${this.nombres} ${this.apellidos}. Mi correo es ${this.correo}.`;
    }
  
    // Getter para nombres
    getNombres() {
      return this.nombres;
    }
  
    // Getter para apellidos
    getApellidos() {
      return this.apellidos;
    }
  
    // Setter para apellidos
    setApellidos(nuevosApellidos) {
      this.apellidos = nuevosApellidos;
    }
  }
  
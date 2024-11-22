// Importamos la clase Curso desde el archivo Curso.js
import Curso from "./classes/Curso.js";
import Alumno from "./classes/Alumno.js";
import Profesorr from "./classes/Profesorr.js";
// Referencia al elemento con el id 'cursos' en el DOM donde se insertarán los elementos creados
const elem = document.getElementById("cursos");

const mostrarCurso = (objetoCurso) => {
  // Crear un nuevo elemento 'div' para el curso
  const hijo = document.createElement("div");
  // Añadir la clase 'card' al nuevo 'div'
  hijo.classList.add("card");
  // Establecer el contenido HTML del nuevo 'div' usando los datos del curso
  hijo.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="${objetoCurso.getPoster()}" alt="${objetoCurso.getNombre()}"/>
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 class="t5 s-mb-2 s-center">${objetoCurso.getNombre()}</h3>
      <div class="s-center">
        <span class="small">Cantidad de clases: ${objetoCurso.getClases()}</span>
      </div>
    </div>
  `;
  // Añadir el nuevo 'div' al elemento con el id 'cursos' en el DOM
  elem.appendChild(hijo);
};

/**
 * Aplicar la función mostrarCurso a cada elemento del arreglo 'misCursos'.
 * Aquí, 'Curso.cursos' es un arreglo estático que contiene todas las instancias de Curso.
 */
const misCursos = Curso.cursos;
misCursos.forEach(c => mostrarCurso(c));

// Referencia al formulario con el id 'formCursos' en el DOM
const formulario = document.getElementById("formCursos");

// Añadir un manejador de eventos al formulario para el evento 'submit'
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevenir la recarga de la página
  const target = e.target; // Referencia al formulario que desencadenó el evento
  // Crear una nueva instancia de Curso con los datos del formulario
  const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value);
  // Mostrar el nuevo curso en el DOM
  mostrarCurso(curso);
  formulario.reset()//metodo para eliminar todas los valores de los input
});
const profe = new Profesorr("beto","quiroga","beto@edteam",true,["react","dart"])
const alum = new Alumno("juanito","perez","juan@ed.team",false,["html","css"])
console.log(alum)

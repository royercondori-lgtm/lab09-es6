import curso, { default as estudiantes } from "./datos.js";
import { reporte } from "./calculos.js";

// Copia con operador spread en objetos y arreglos
const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];

console.log(`Curso: ${curso}`);

// Selección de elementos del DOM
const ulReportes = document.querySelector("#reportes");
const h3Curso = document.querySelector("#curso");

if (h3Curso) h3Curso.textContent = `Curso: ${curso}`;

todos.forEach((estudiante) => {
  const textoReporte = reporte(estudiante);

  // Imprimir en consola
  console.log(textoReporte);

  // Mostrar en la página HTML
  if (ulReportes) {
    const li = document.createElement("li");
    li.textContent = textoReporte;
    ulReportes.appendChild(li);
  }
});

// Rest operator en parámetros
export const promedio = (...notas) => {
  const suma = notas.reduce((t, n) => t + n, 0);
  return suma / notas.length;
};

// Parámetro por defecto
export const estado = (nota, minima = 13) =>
  nota >= minima ? "Aprobado" : "Desaprobado";

// Desestructuración + Spread + Template Literals
export const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};

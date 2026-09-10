/**
 * ============================================================================
 * 🥊 RETO 01: Tipos Primitivos, Inferencia y Arrays en TypeScript
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 * 
 * 📖 CONTEXTO / MISIÓN:
 * El sistema web anterior de la UETS sumaba calificaciones en JavaScript vanilla
 * sin tipos ("10" + "8" = "108"), produciendo errores graves en los promedios.
 * Tu misión es declarar tus variables personales con tipos explícitos, formatear
 * tus datos e implementar el cálculo de promedios con tipado estricto.
 * 
 * 🛠️ INSTRUCCIONES:
 * 1. Lee atentamente cada bloque marcado con `// TODO:`.
 * 2. Escribe o completa el código TypeScript según las especificaciones.
 * 3. Ejecuta en tu terminal: `pnpm run start:01` para verificar los tests.
 */

// ============================================================================
// PASO 1: Tipado de Variables Personales e Impresión de Resumen
// ============================================================================


export const nombreEstudiante: string = "Ismael_Lojano";       // 👈 TODO: Escribe tu nombre aquí
export const edadEstudiante: number = 17;          // 👈 TODO: Escribe tu edad aquí
export const promedioObjetivo: number = 9.6;        // 👈 TODO: Escribe tu promedio objetivo
export let estaMatriculado: boolean = true;    // 👈 TODO: Cambia a true

export function obtenerResumenPersonal(): string {
  let formato = `👤 Estudiante: ${nombreEstudiante} | 🎂 Edad: ${edadEstudiante} | 🎯 Meta: ${promedioObjetivo} | 📋 Estado: ${estaMatriculado ? "MATRICULADO" : "NO_MATRICULADO"}`;
  return formato;
}

// ============================================================================
// PASO 2: Función para Calcular el Promedio
// ============================================================================
export function calcularPromedio(notas: readonly number[]): number {
  if (notas.length == 0){
    return 0;
  }

  let suma = 0;
  for (const nota of notas){
    suma= suma +nota;
  }
  return Number((suma / notas.length).toFixed(2));
}

// ============================================================================
// PASO 3: Formateador de Ficha Técnica
// ============================================================================
export function formatearFichaEstudiante(
  nombre: string,
  edad: number,
  paralelo: "E1" | "E2",
  activo: boolean
): string {
const estadoTexto = activo ? "MATRICULADO" : "RETIRADO";
  return `[FICHA UETS] ${nombre.toUpperCase()} (${edad} años) - Paralelo: ${paralelo} - Estado: ${estadoTexto}`;
}

/**
 * Script para controlar el anillo de progreso del temporizador
 */

const ring = document.getElementById('ringProgress');
const timerDisplay = document.getElementById('timer');

// Circunferencia calculada: 2 * PI * radio (54) ≈ 339.29
const CIRCUMFERENCE = 339.29;

/**
 * Función para actualizar el círculo visualmente
 * @param {number} tiempoActual - Segundos actuales restantes
 * @param {number} tiempoTotal - Duración total del ejercicio
 */
function actualizarCirculo(tiempoActual, tiempoTotal) {
    if (!ring) return;

    // Calcular cuánto debe desplazarse el trazo
    // A medida que tiempoActual disminuye, el offset aumenta para "vaciar" el círculo
    const progress = tiempoActual / tiempoTotal;
    const offset = CIRCUMFERENCE - (progress * CIRCUMFERENCE);
    
    ring.style.strokeDashoffset = offset;

    // Opcional: Cambiar color si queda poco tiempo (ej. menos de 10 seg)
    if (tiempoActual <= 10 && tiempoActual > 0) {
        ring.style.stroke = "#ff4757"; // Rojo para alerta
    } else {
        ring.style.stroke = "#4aafeb"; // Azul original
    }
}

// Ejemplo de cómo llamar a esta función dentro de tu lógica de cuenta regresiva:
// Si tu variable de tiempo se llama 'segundos':
// actualizarCirculo(segundos, 60);
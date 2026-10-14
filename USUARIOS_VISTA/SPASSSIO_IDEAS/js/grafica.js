// Variable global para almacenar el período seleccionado
window.periodoActual = 'semanal';

// Función para renderizar el contenido según el filtro seleccionado
window.actualizarVistaGrafica = function(periodo) {
    window.periodoActual = periodo;
    
    // 1. Actualizar estilos de los botones de período
    document.querySelectorAll('.btn-periodo').forEach(btn => btn.classList.remove('active'));
    const btnActivo = document.querySelector(`.btn-periodo[data-periodo="${periodo}"]`);
    if (btnActivo) btnActivo.classList.add('active');

    // 2. Actualizar texto de navegación según el período
    const labelPeriodo = document.getElementById('label-periodo');
    const rangoFechas = document.getElementById('rango-fechas');
    
    if (labelPeriodo && rangoFechas) {
        switch(periodo) {
            case 'semanal':
                labelPeriodo.textContent = 'Semana 2';
                rangoFechas.textContent = '22/7/2026 - 23/7/2026';
                break;
            case 'resumen-mensual':
                labelPeriodo.textContent = 'Resumen Mensual';
                rangoFechas.textContent = 'Julio 2026';
                break;
            case 'mensual':
                labelPeriodo.textContent = 'Mes Actual';
                rangoFechas.textContent = '01/07/2026 - 31/07/2026';
                break;
            case 'anual':
                labelPeriodo.textContent = 'Año 2026';
                rangoFechas.textContent = 'Jan 2026 - Dec 2026';
                break;
        }
    }

    // 3. Simular verificación de datos (puedes conectar tu API / Chart.js aquí)
    const contenedorEstado = document.getElementById('grafica-estado');
    if (contenedorEstado) {
        // Ejemplo de validación: si no hay datos muestra la leyenda
        contenedorEstado.innerHTML = `<p class="empty-data-msg">No hay datos para esta vista.</p>`;
    }
};

// Navegación con flechas (Anterior / Siguiente)
window.cambiarRangoPeriodo = function(direccion) {
    console.log(`Cambiando periodo hacia: ${direccion}`);
    // Aquí puedes sumar o restar semanas/meses y recalcular las fechas
};

// Inicialización cuando se inyecta el HTML
window.initGraficaModule = function() {
    window.actualizarVistaGrafica('semanal');
};

// Respaldo por si se carga la página de forma directa
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('sec-progreso')) {
        window.initGraficaModule();
    }
});
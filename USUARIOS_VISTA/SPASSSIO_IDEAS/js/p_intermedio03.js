let ejercicios = [
    "P I 3.1 Trote en su lugar con pequeños sprints escalonados",
    "P I 3.2 subir y bajar brazos al piso con brinco piernas abiertas",
    "P I 3.3 Desplantes en piso y dorsales",
    "P I 3.4 Tocar talones adelante y atrás",
    "P I 3.5 Abrir cerrar piernas y brazos con brinco y cruzar piernas"
];

let desc = [
    "trote en su lugar",
    "sube y baja brazos",
    "desplantes",
    "toca tus talones",
    "movimiento dinámico"
];

let tiempo = 60;
let totalEjercicio = 60;
let i = 0;
let intervalo;
let corriendo = false;
let tiempoTotalTranscurrido = 0;

// Configuración del círculo: Ajustado a la nueva escala del CSS
const CIRCUNFERENCIA = 226.195; 
const ring = document.getElementById("ringProgress");

function alternarIniciarPausar() {
    const btn = document.getElementById("btn-iniciar-pausar");
    if (corriendo) {
        clearInterval(intervalo);
        corriendo = false;
        btn.innerText = "Continuar";
    } else {
        corriendo = true;
        btn.innerText = "Pausar";
        iniciarTemporizador();
    }
}

function iniciarTemporizador() {
    intervalo = setInterval(() => {
        tiempo--;
        tiempoTotalTranscurrido++;

        // Actualizar UI del cronómetro
        const timerEl = document.getElementById("timer");
        if (timerEl) timerEl.innerText = tiempo;
        
        // Actualizar UI del Tiempo Total
        let min = Math.floor(tiempoTotalTranscurrido / 60);
        let seg = tiempoTotalTranscurrido % 60;
        const tiempoTotalEl = document.getElementById("tiempo-total");
        if (tiempoTotalEl) {
            tiempoTotalEl.innerText = 
                String(min).padStart(2, '0') + ":" + String(seg).padStart(2, '0');
        }

        // Actualizar Círculo de Progreso
        let offset = CIRCUNFERENCIA - (tiempo / totalEjercicio) * CIRCUNFERENCIA;
        if (ring) ring.style.strokeDashoffset = offset;

        if (tiempo <= 0) {
            i++;
            if (i >= ejercicios.length) {
                clearInterval(intervalo);
                const ejercicioEl = document.getElementById("ejercicio");
                if (ejercicioEl) ejercicioEl.innerText = "✅ Rutina terminada";
                corriendo = false;
                const btnIniciar = document.getElementById("btn-iniciar-pausar");
                if (btnIniciar) btnIniciar.innerText = "Iniciar";
                return;
            }
            tiempo = totalEjercicio;
            const ejercicioEl = document.getElementById("ejercicio");
            if (ejercicioEl) ejercicioEl.innerText = ejercicios[i];
            if (ring) ring.style.strokeDashoffset = 0;
        }
    }, 1000);
}

function reiniciar() {
    clearInterval(intervalo);
    corriendo = false;
    tiempo = 60;
    i = 0;
    tiempoTotalTranscurrido = 0;
    
    const btnIniciar = document.getElementById("btn-iniciar-pausar");
    if (btnIniciar) btnIniciar.innerText = "Iniciar";
    
    const timerEl = document.getElementById("timer");
    if (timerEl) timerEl.innerText = tiempo;
    
    const ejercicioEl = document.getElementById("ejercicio");
    if (ejercicioEl) ejercicioEl.innerText = ejercicios[i];
    
    const tiempoTotalEl = document.getElementById("tiempo-total");
    if (tiempoTotalEl) tiempoTotalEl.innerText = "00:00";
    
    if (ring) ring.style.strokeDashoffset = 0;
}

function verEjercicio(index) {
    const modalEjercicio = document.getElementById("modalEjercicio");
    if (modalEjercicio) modalEjercicio.style.display = "flex";
    
    const tituloEl = document.getElementById("titulo");
    if (tituloEl) tituloEl.innerText = ejercicios[index];
    
    const descEl = document.getElementById("desc");
    if (descEl) descEl.innerText = desc[index];
    
    const gifEl = document.getElementById("gif");
    if (gifEl) gifEl.src = "gif" + index + ".gif";
}

function abrirVideo(tipo) {
    let links = {
        "tutorial": "img/tutorial.mp4",
        "calentamiento": "img/calentamiento.mp4",
        "intensidad": "img/intensidad.mp4",
        "relajacion": "img/relajacion.mp4"
    };
    const modalVideo = document.getElementById("modalVideo");
    if (modalVideo) modalVideo.style.display = "flex";
    
    const videoEl = document.getElementById("video");
    if (videoEl) videoEl.src = links[tipo] || "";
}

function cerrar(id) {
    const modalEl = document.getElementById(id);
    if (modalEl) modalEl.style.display = "none";
    
    const vid = document.getElementById("video");
    if (vid) {
        vid.pause();
        vid.src = "";
    }
}

/* SOLO UN ONLOAD */
document.addEventListener("DOMContentLoaded", function() {
    if (sessionStorage.getItem("modalesYaMostrados")) return;
    sessionStorage.setItem("modalesYaMostrados", "true");
    
    const modal1 = document.getElementById("modal1");
    if (modal1) modal1.style.display = "flex";
});

/* MODALES */
function siguienteModal() {
    const modal1 = document.getElementById("modal1");
    if (modal1) modal1.style.display = "none";
    
    const modal2 = document.getElementById("modal2");
    if (modal2) modal2.style.display = "flex";
}

function cerrarModales() {
    const modal2 = document.getElementById("modal2");
    if (modal2) modal2.style.display = "none";
}
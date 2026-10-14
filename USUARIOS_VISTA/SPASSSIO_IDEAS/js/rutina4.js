// ==========================================
// CONFIGURACIÓN DE 7 BLOQUES (Calentamiento 1°, 5 Ejercicios, Relajación 7°)
// ==========================================
let ejercicios = [
    "Calentamiento articular",
    "Desplantes pies juntos",
    "Bicicletas codos/rodillas",
    "Doble golpe con salto y flexión piernas",
    "Lagartija con elevación de brazo alterno",
    "Saltos en escuadra alterno",
    "Relajación y estiramientos"
];

let desc = [
    "Eleva la temperatura corporal y lubrica articulaciones (60 segundos)",
    "Salta como si tuvieras cuerda (60 segundos)",
    "Corre llevando talones atrás (60 segundos)",
    "Lanza golpes al aire (60 segundos)",
    "Flexiones controladas (60 segundos)",
    "Movimiento dinámico (60 segundos)",
    "Estiramientos finales para relajar los músculos (60 segundos)"
];

let mediosEjercicios = [
    "img/calentamiento.gif",
    "img/lagartija_alt.gif",
    "img/bicicleta.gif",
    "img/doble_golpe.gif",
    "img/alt.gif",
    "img/salto_escuadra.gif",
    "img/relajacion.gif"
];

let audiosEjercicios = [
    "aud/calentamiento.aac",
    "audio/saltar_cuerda.aac",
    "audio/trote_talon.aac",
    "audio/golpes_boxeo.aac",
    "audio/lagartijas.aac",
    "audio/caperuzas.aac",
    "audio/relajacion.aac"
];

let reproductorAudio = new Audio();

const DURACION_TOTAL_RUTINA = 7 * 60; // 420 segundos (7 minutos en total)
const CANTIDAD_FASES = 7;
const TIEMPO_POR_FASE = DURACION_TOTAL_RUTINA / CANTIDAD_FASES; // 60 segundos exactos por fase

let tiempoTotalTranscurrido = 0;
let timerTotalInterval = null;
let tiempo = TIEMPO_POR_FASE;
let i = 0;
let corriendo = false;
let pausadoPorPestaña = false;

const circunferencia = 226.195;
let ringProgress;

document.addEventListener("DOMContentLoaded", function() {
    ringProgress = document.getElementById('ringProgress');
    if(ringProgress) {
        ringProgress.style.strokeDasharray = circunferencia;
    }

    if (!sessionStorage.getItem("modalesYaMostrados")) {
        sessionStorage.setItem("modalesYaMostrados", "true");
        const modal1 = document.getElementById("modal1");
        if (modal1) modal1.style.display = "flex";
    }
    
    // Cargar la multimedia inicial del primer ejercicio
    actualizarMediaTimer();
});

function actualizarCirculoTotal() {
    if (!ringProgress) return;
    
    let progreso = tiempoTotalTranscurrido / DURACION_TOTAL_RUTINA;
    if (progreso > 1) progreso = 1;

    let dashoffset = circunferencia * (1 - progreso);
    ringProgress.style.strokeDashoffset = dashoffset;
    
    ringProgress.style.stroke = ((DURACION_TOTAL_RUTINA - tiempoTotalTranscurrido) <= 10 && (DURACION_TOTAL_RUTINA - tiempoTotalTranscurrido) > 0) ? "#ff4757" : "#4aafeb";

    let minutos = Math.floor(tiempoTotalTranscurrido / 60);
    let segundos = tiempoTotalTranscurrido % 60;
    
    let minStr = minutos < 10 ? "0" + minutos : minutos;
    let segStr = segundos < 10 ? "0" + segundos : segundos;
    
    const elementoTiempoTotal = document.getElementById('tiempo-total');
    if(elementoTiempoTotal) {
        elementoTiempoTotal.innerText = `${minStr}:${segStr}`;
    }
}

// Función para actualizar la imagen o video del temporizador según el ejercicio actual
function actualizarMediaTimer() {
    const contenedorImg = document.getElementById("contenedor-img-timer");
    if (!contenedorImg) return;

    let rutaMedia = mediosEjercicios[i];

    if (rutaMedia && (rutaMedia.endsWith(".mp4") || rutaMedia.endsWith(".webm"))) {
        contenedorImg.innerHTML = `
            <video id="img-ejercicio" autoplay loop muted playsinline class="img-ejercicio-anim" style="width:100%; height:100%; object-fit:contain;">
              <source src="${rutaMedia}" type="video/mp4">
              Tu navegador no soporta videos HTML5.
            </video>`;
    } else {
        contenedorImg.innerHTML = `
            <img id="img-ejercicio" 
                 src="${rutaMedia}" 
                 alt="${ejercicios[i]}" 
                 class="img-ejercicio-anim"
                 onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\'fa-solid fa-child-reaching fa-bounce fallback-icon\'></i>';">`;
    }
}

function reproducirAudioActual() {
    if (audiosEjercicios[i]) {
        reproductorAudio.src = audiosEjercicios[i];
        reproductorAudio.load();
        reproductorAudio.play().catch(error => {
            console.log("Reproducción de audio bloqueada o archivo no encontrado: ", error);
        });
    }
}

function alternarIniciarPausar() {
    const btn = document.getElementById('btn-iniciar-pausar');
    if (!corriendo) {
        iniciar();
        if (btn) {
            btn.innerText = "Pausar";
            btn.style.backgroundColor = "#55a5e7"; 
        }
    } else {
        pausar();
        if (btn) {
            btn.innerText = "Iniciar";
            btn.style.backgroundColor = ""; 
        }
    }
}

function iniciar() {
    if (corriendo) return;
    corriendo = true;

    const elemEjercicio = document.getElementById("ejercicio");
    if (elemEjercicio) elemEjercicio.innerText = ejercicios[i];
    
    actualizarMediaTimer();
    reproducirAudioActual();

    if (timerTotalInterval) clearInterval(timerTotalInterval);

    timerTotalInterval = setInterval(() => {
        if (tiempoTotalTranscurrido < DURACION_TOTAL_RUTINA) {
            tiempoTotalTranscurrido++;
            actualizarCirculoTotal();
        }

        tiempo--;
        const elemTimer = document.getElementById("timer");
        if (elemTimer) elemTimer.innerText = tiempo;

        if (tiempo <= 0) {
            i++;
            if (i >= ejercicios.length || tiempoTotalTranscurrido >= DURACION_TOTAL_RUTINA) {
                clearInterval(timerTotalInterval);
                if (elemEjercicio) elemEjercicio.innerText = "✅ Rutina terminada";
                corriendo = false;
                reproductorAudio.pause();
                
                const btn = document.getElementById('btn-iniciar-pausar');
                if (btn) {
                    btn.innerText = "Iniciar";
                    btn.style.backgroundColor = "";
                }
                return;
            }
            tiempo = TIEMPO_POR_FASE;
            if (elemEjercicio) elemEjercicio.innerText = ejercicios[i];
            actualizarMediaTimer();
            reproducirAudioActual();
        }
    }, 1000);
}

function pausar() {
    clearInterval(timerTotalInterval);
    corriendo = false;
    reproductorAudio.pause();
}

function reiniciar() {
    pausar();
    tiempo = TIEMPO_POR_FASE;
    tiempoTotalTranscurrido = 0;
    i = 0;
    pausadoPorPestaña = false;
    reproductorAudio.currentTime = 0;

    const btn = document.getElementById('btn-iniciar-pausar');
    if (btn) {
        btn.innerText = "Iniciar";
        btn.style.backgroundColor = "";
    }

    const elemTimer = document.getElementById("timer");
    const elemEjercicio = document.getElementById("ejercicio");
    const elemTiempoTotal = document.getElementById("tiempo-total");

    if (elemTimer) elemTimer.innerText = tiempo;
    if (elemEjercicio) elemEjercicio.innerText = ejercicios[i];
    if (elemTiempoTotal) elemTiempoTotal.innerText = "00:00";

    if (ringProgress) {
        ringProgress.style.strokeDashoffset = circunferencia; 
        ringProgress.style.stroke = "#4aafeb";
    }

    actualizarMediaTimer();
}

document.addEventListener('visibilitychange', () => {
    const btn = document.getElementById('btn-iniciar-pausar');

    if (document.hidden && corriendo) {
        pausar();
        pausadoPorPestaña = true;
        if (btn) {
            btn.innerText = "Reanudar";
            btn.style.backgroundColor = "#e67e22";
        }
    } else if (!document.hidden && pausadoPorPestaña) {
        iniciar();
        pausadoPorPestaña = false;
        if (btn) {
            btn.innerText = "Pausar";
            btn.style.backgroundColor = "#55a5e7";
        }
    }
});

function verEjercicio(index) {
    const modal = document.getElementById("modalEjercicio");
    const elemTitulo = document.getElementById("titulo");
    const elemDesc = document.getElementById("desc");
    const contenedorMedia = document.getElementById("contenedorMediaEjercicio");

    if (elemTitulo) elemTitulo.innerText = ejercicios[index];
    if (elemDesc) elemDesc.innerText = desc[index];

    const rutaMedia = mediosEjercicios[index];

    if (contenedorMedia) {
        if (rutaMedia && (rutaMedia.endsWith(".mp4") || rutaMedia.endsWith(".webm"))) {
            contenedorMedia.innerHTML = `
                <video id="mediaDemo" autoplay loop muted playsinline style="width:100%; height:320px; object-fit:contain; border-radius:12px; margin-top:15px; background-color: #000;">
                  <source src="${rutaMedia}" type="video/mp4">
                  Tu navegador no soporta videos HTML5.
                </video>`;
        } else {
            contenedorMedia.innerHTML = `
                <img id="mediaDemo" src="${rutaMedia}" alt="${ejercicios[index]}" style="width:100%; height:320px; object-fit:contain; border-radius:12px; margin-top:15px; background-color: #000;">`;
        }
    }

    if (modal) modal.style.display = "flex";
}

function abrirVideo(tipo) {
    let link = "";
    if (tipo === "tutorial") link = "img/tutorial.mp4";
    if (tipo === "calentamiento") link = "img/calentamiento.mp4";
    if (tipo === "intensidad") link = "img/intensidad.mp4";
    if (tipo === "relajacion") link = "img/relajacion.mp4";

    const modal = document.getElementById("modalVideo");
    const elemVideo = document.getElementById("video");

    if (modal && elemVideo) {
        elemVideo.src = link;
        modal.style.display = "flex";
        elemVideo.play().catch(() => {});
    }
}

function cerrar(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";

    const elemVideo = document.getElementById("video");
    if (elemVideo) {
        elemVideo.pause();
        elemVideo.src = "";
    }

    const contenedorMedia = document.getElementById("contenedorMediaEjercicio");
    if (contenedorMedia) {
        contenedorMedia.innerHTML = "";
    }
}

function siguienteModal() {
    const modal1 = document.getElementById("modal1");
    const modal2 = document.getElementById("modal2");
    if (modal1) modal1.style.display = "none";
    if (modal2) modal2.style.display = "flex";
}

function cerrarModales() {
    const modal2 = document.getElementById("modal2");
    if (modal2) modal2.style.display = "none";
}
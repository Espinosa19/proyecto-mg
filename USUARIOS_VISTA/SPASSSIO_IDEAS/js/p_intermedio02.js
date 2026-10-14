let ejercicios = [
    "P I 2.1 Trote en su lugar subiendo y bajando brazos",
    "P I 2.2 Desplante lateral subir brazos luego cierro piernas y desplante al otro lado tocar piso",
    "P I 2.3 Abrir cerrar brazos y piernas con brinco desplazam lateral",
    "P I 2.4 Abrir cerrar piernas laterales con movimiento remo brazos",
    "P I 2.5 Saltos alternos y patada"
];

let desc = [
    "Trote suave en tu lugar coordinando el movimiento ascendente y descendente de los brazos.",
    "Realiza un desplante hacia un lado elevando los brazos, regresa al centro cerrando piernas y repite hacia el otro lado tocando el piso.",
    "Saltos laterales abriendo y cerrando brazos y piernas simultáneamente.",
    "Apertura lateral de piernas combinada con un movimiento de remo con los brazos.",
    "Saltos alternados con proyección de patada al frente de forma dinámica."
];

// Arreglo con las rutas de las imágenes/GIFs correspondientes a cada ejercicio
let imagenesEjercicios = [
    "img/ejercicios/trote_brazos.gif",
    "img/ejercicios/desplante_lateral.gif",
    "img/ejercicios/abrir_cerrar_brinco.gif",
    "img/ejercicios/abrir_cerrar_remo.gif",
    "img/ejercicios/saltos_patada.gif"
];

let tiempo = 60;
let totalEjercicio = 60;
let i = 0;
let intervalo;
let corriendo = false;
let tiempoTotalTranscurrido = 0;

// Configuración del círculo: Radio 36 -> Circunferencia del HTML = 2 * PI * 36 = 226.195
const CIRCUNFERENCIA = 226.195;

function alternarIniciarPausar() {
    const btn = document.getElementById("btn-iniciar-pausar");
    const ring = document.getElementById("ringProgress");

    if (corriendo) {
        clearInterval(intervalo);
        corriendo = false;
        btn.innerText = "Continuar";
    } else {
        corriendo = true;
        btn.innerText = "Pausar";
        iniciarTemporizador();
        
        // Iniciar también el cronómetro del tiempo total de la rutina si existe la función en el HTML
        if (typeof iniciarCronomtroTotal === "function" && tiempoTotalTranscurrido === 0) {
            iniciarCronomtroTotal();
        }
    }
}

function iniciarTemporizador() {
    const ring = document.getElementById("ringProgress");

    intervalo = setInterval(() => {
        tiempo--;
        tiempoTotalTranscurrido++;

        // Actualizar UI del cronómetro de segundos
        const timerEl = document.getElementById("timer");
        if (timerEl) timerEl.innerText = tiempo;
        
        // Actualizar UI del Tiempo Total global
        let min = Math.floor(tiempoTotalTranscurrido / 60);
        let seg = tiempoTotalTranscurrido % 60;
        const tiempoTotalEl = document.getElementById("tiempo-total");
        if (tiempoTotalEl) {
            tiempoTotalEl.innerText = String(min).padStart(2, '0') + ":" + String(seg).padStart(2, '0');
        }

        // Actualizar Círculo de progreso
        if (ring) {
            let offset = CIRCUNFERENCIA - (tiempo / totalEjercicio) * CIRCUNFERENCIA;
            ring.style.strokeDashoffset = offset;
        }

        if (tiempo <= 0) {
            i++;
            if (i >= ejercicios.length) {
                clearInterval(intervalo);
                const ejercicioEl = document.getElementById("ejercicio");
                if (ejercicioEl) ejercicioEl.innerText = "✅ Rutina terminada";
                corriendo = false;
                const btnPausar = document.getElementById("btn-iniciar-pausar");
                if (btnPausar) btnPausar.innerText = "Iniciar";
                return;
            }
            tiempo = totalEjercicio;
            
            // Actualizar texto del ejercicio actual
            const ejercicioEl = document.getElementById("ejercicio");
            if (ejercicioEl) ejercicioEl.innerText = ejercicios[i];
            
            // Actualizar GIF / Imagen del ejercicio correspondiente
            const imgEjercicio = document.getElementById("img-ejercicio");
            if (imgEjercicio && imagenesEjercicios[i]) {
                imgEjercicio.src = imagenesEjercicios[i];
            }

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
    
    const btnPausar = document.getElementById("btn-iniciar-pausar");
    if (btnPausar) btnPausar.innerText = "Iniciar";
    
    const timerEl = document.getElementById("timer");
    if (timerEl) timerEl.innerText = tiempo;
    
    const ejercicioEl = document.getElementById("ejercicio");
    if (ejercicioEl) ejercicioEl.innerText = ejercicios[i];
    
    const tiempoTotalEl = document.getElementById("tiempo-total");
    if (tiempoTotalEl) tiempoTotalEl.innerText = "00:00";
    
    const imgEjercicio = document.getElementById("img-ejercicio");
    if (imgEjercicio && imagenesEjercicios[0]) {
        imgEjercicio.src = imagenesEjercicios[0];
    }

    const ring = document.getElementById("ringProgress");
    if (ring) ring.style.strokeDashoffset = 0;
}

function verEjercicio(index) {
    const modal = document.getElementById("modalEjercicio");
    if (modal) modal.style.display = "flex";
    
    const titulo = document.getElementById("titulo");
    if (titulo) titulo.innerText = ejercicios[index];
    
    const descEl = document.getElementById("desc");
    if (descEl) descEl.innerText = desc[index] || "Sin descripción disponible";
    
    const gif = document.getElementById("gif");
    if (gif) gif.src = imagenesEjercicios[index] || "";
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
    
    const video = document.getElementById("video");
    if (video) video.src = links[tipo] || "";
}

function cerrar(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
    const vid = document.getElementById("video");
    if (vid) vid.src = "";
}

// Lógica de Modales iniciales
document.addEventListener("DOMContentLoaded", function() {
    if (sessionStorage.getItem("modalesYaMostrados")) return;
    sessionStorage.setItem("modalesYaMostrados", "true");
    const modal1 = document.getElementById("modal1");
    if (modal1) modal1.style.display = "flex";
});

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
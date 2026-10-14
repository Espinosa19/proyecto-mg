function abrirTest(tipo){
  const titulo = document.getElementById("tituloTest");
  const contenido = document.getElementById("contenidoTest");

  if(tipo === "resistencia"){
    titulo.innerText = "Test de Resistencia";
    contenido.innerHTML = `
    1. Camina o trota a ritmo constante.<br>
    2. Mantén el ejercicio el mayor tiempo posible.<br>
    3. Detente cuando sientas fatiga.<br>
    4. Anota el tiempo total realizado.
    `;
  }

  if(tipo === "flexibilidad"){
    titulo.innerText = "Test de Flexibilidad";
    contenido.innerHTML = `
    1. Colócate de pie con piernas rectas.<br>
    2. Inclínate lentamente hacia adelante.<br>
    3. Intenta tocar tus pies sin doblar las rodillas.<br>
    4. Mantén la posición 10 segundos.
    `;
  }

  if(tipo === "fuerza"){
    titulo.innerText = "Test de Fuerza";
    contenido.innerHTML = `
    1. Realiza flexiones de brazos.<br>
    2. Mantén la espalda recta.<br>
    3. Haz todas las repeticiones que puedas.<br>
    4. Descansa al terminar.
    `;
  }

  if(tipo === "equilibrio"){
    titulo.innerText = "Test de Equilibrio";
    contenido.innerHTML = `
    1. Colócate de pie sobre una sola pierna.<br>
    2. Mantén el equilibrio sin apoyarte.<br>
    3. Cuenta cuántos segundos resistes.<br>
    4. Cambia de pierna y repite.
    `;
  }

document.getElementById("modalTest").classList.add("activo");

}

function cerrarTest(){
 document.getElementById("modalTest").classList.remove("activo");

}


let indice = 0;

function moverCarrusel(direccion){
  const track = document.getElementById("carouselTrack");
  const total = track.children.length;

  indice += direccion;

  if(indice < 0) indice = total - 1;
  if(indice >= total) indice = 0;

  track.style.transform = `translateX(-${indice * 100}%)`;
}


function abrirPaquete(tipo){
  const titulo = document.getElementById("titulo-paquete");
  const contenido = document.getElementById("contenido-paquete");
  const modal = document.getElementById("modal-paquete");

  let info = {
    basico: {
      nombre: "Plan Básico",
      lista: [
        "Encuesta inicial de salud (opcional)",
        "Programa personalizado de ejercicio cardiovascular",
        "Cambio de rutina mensual",
        "Orientación nutricional",
        "Acceso a pláticas/conferencias sobre temas de salud y testimoniales"
      ]
    },
    premium: {
      nombre: "Plan Premium",
      lista: [
        "Encuesta inicial de salud (opcional)",
        "Programa personalizado de ejercicio cardiovascular",
        "Cambio de rutina mensual",
        "Orientación nutricional",
        "Acceso a platicas/conferencias sobre temas de salud y testimoniales",
        "Programa de tono muscular o especial (para acelerar resultados)",
        "Requerimiento calórico personalizado (para apoyarte en tus metas)",
        "Acceso a clases grupales calendarizadas (para mantenerte motivado)"
      ]
    },
    elite: {
      nombre: "Plan Elite",
      lista: [
        "Encuesta inicial de salud (opcional)",
        "Programa personalizado de ejercicio cardiovascular",
        "Cambio de rutina mensual",
        "Orientación nutricional",
        "Acceso a platicas/conferencias sobre temas de salud y testimoniales",
"Programa de tono muscular o especial (para acelerar resultados)",
"Requerimiento calórico personalizado (para apoyarte en tus metas)",
"Acceso a clases grupales calendarizadas (para mantenerte motivado)",
"Acceso a todos los servicios de programa (cardio, tono muscular y especial) Este último para apoyarte al 100% en tus objetivos especificos (rehabilitación, baile, tonificación, competiciones, etc)",
"Acceso a webinars exclusivos"

      ]
    },
    empresarial: {
      nombre: "Plan Empresarial",
      lista: [
        "Inscribe a tu empresa completa con facturación centralizada.",
"Elige el plan más adecuado para cada uno de los elementos que conforman tu empresa.",
"Incentívalos a realizar ejercicio y mejora la cultura de salud en tu organización.",
"Tarifas preferenciales exclusivas por volumen de inscritos.",
"Clases y talleres exclusivos de bienestar y manejo de estrés para el equipo.",
"Reporte trimestral de participación para evaluar el impacto del programa.",
"Mejora la productividad de tus empleados y reduce el absentismo laboral."
      ]
    }
  };

  titulo.textContent = info[tipo].nombre;
  contenido.innerHTML = "";
  info[tipo].lista.forEach(item=>{
    let li = document.createElement("li");
    li.textContent = item;
    contenido.appendChild(li);
  });

  modal.classList.add("activo");
}

function cerrarPaquete(){
  document.getElementById("modal-paquete").classList.remove("activo");
}


function cerrarSesion(){
  window.location.href = "index.html";
}


/* CURSOR */

document.addEventListener("DOMContentLoaded", ()=>{

const cursor = document.querySelector(".cursor-azul");

document.addEventListener("mousemove", (e)=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const interactivos = document.querySelectorAll("a, button, .servicio, .beneficio-card, .nosotros-card, .paquete-btn");

interactivos.forEach(el=>{
  el.addEventListener("mouseenter", ()=>{
    cursor.classList.add("activo");
  });
  el.addEventListener("mouseleave", ()=>{
    cursor.classList.remove("activo");
  });
});

});




document.addEventListener("DOMContentLoaded", () => {

  const videos = document.querySelectorAll("video");

  videos.forEach(video => {
    video.addEventListener("play", () => {

      videos.forEach(v => {
        if (v !== video) {
          v.pause();
          v.currentTime = 0; // opcional: lo reinicia
        }
      });

    });
  });

});
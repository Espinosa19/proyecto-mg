// ==========================================
// CONTROLADOR DE BLOGS Y MODALES (blogs.js)
// ==========================================

// 1. Abre el modal principal según la categoría
function abrirBlog(tipo) {
  const modal = document.getElementById("modal-blog");
  const contenido = document.getElementById("contenido-blog");

  let blogs = {
    "salud": `
      <div class="blog-revista">
        <h2 class="blog-titulo">MÓDULO DE SALUD INTEGRAL</h2>
        <p class="blog-categoria">Categoría: SALUD Y BIENESTAR</p>
        <p class="blog-intro">Explora nuestros artículos enfocados en mejorar tu calidad de vida y nutrición diaria.</p>

        <div class="contenedor-cards">

          <!-- Card 1: Obesidad -> blogs.html -->
          <div class="card">
            <img src="img/im2.jpg" alt="Obesidad">
            <h3>La Obesidad</h3>
            <p>Una enfermedad crónica y compleja con impacto directo en el sistema cardiovascular y metabólico.</p>
            <button onclick="abrirSubcard('Obesidad', 'blogs.html')">Ver más</button>
          </div>

          <!-- Card 2: Hábitos Saludables -> blogs.html -->
          <div class="card">
            <img src="img/im2.jpg" alt="Hábitos">
            <h3>Hábitos Saludables</h3>
            <p>Pequeñas acciones sostenibles en tu rutina diaria que generan grandes transformaciones.</p>
            <button onclick="abrirSubcard('Habitos', 'blogs.html')">Ver más</button>
          </div>

          <!-- Card 3: Pérdida de Peso -> blogs.html -->
          <div class="card">
            <img src="img/im2.jpg" alt="Pérdida de Peso">
            <h3>Pérdida de Peso</h3>
            <p>Estrategias balanceadas para reducir grasa corporal sin comprometer tu masa muscular.</p>
            <button onclick="abrirSubcard('PerdidaPeso', 'blogs.html')">Ver más</button>
          </div>

          <!-- Card 4: Comida Chatarra -> blogs.html -->
          <div class="card">
            <img src="img/im2.jpg" alt="Comida Chatarra">
            <h3>Comida Chatarra</h3>
            <p>Consecuencias de los ultraprocesados y cómo tomar mejores decisiones alimenticias.</p>
            <button onclick="abrirSubcard('ComidaChatarra', 'blogs.html')">Ver más</button>
          </div>

        </div>
      </div>
    `,

    "empresarial": `
      <div class="blog-revista">
        <h2 class="blog-titulo">LA ACTIVIDAD FÍSICA EN LA EMPRESA</h2>
        <p class="blog-categoria">Categoría: EMPRESARIAL</p>
        <p class="blog-subtitulo">Un impulso integral para el éxito corporativo</p>
        
        <div class="blog-img-principal">
          <img src="img/empresarial.jpg" alt="Bienestar Laboral">
        </div>

        <div class="blog-columnas">
          <div>
            <h3>Impacto en la Productividad</h3>
            <p>Promover programas deportivos dentro de la organización reduce los niveles de cortisol (estrés) y previene afecciones ergonómicas.</p>
          </div>
          <div>
            <h3>Cultura Organizacional</h3>
            <p>Fomenta el trabajo en equipo, disminuye drásticamente el ausentismo laboral y refuerza el sentido de pertenencia.</p>
          </div>
        </div>

        <div class="blog-frase">
          "Un equipo activo es un equipo más creativo, enfocado y saludable."
        </div>
      </div>
    `,

    "ejercicio": `
      <div class="blog-revista">
        <h2 class="blog-titulo">EL EJERCICIO COMO PILAR DE VIDA</h2>
        <p class="blog-categoria">Categoría: EJERCICIO Y RENDIMIENTO</p>
        <p class="blog-subtitulo">Más que un pasatiempo: el camino hacia un envejecimiento vibrante</p>

        <div class="blog-grid">
          <div class="blog-col">
            <h3>Preservación Muscular</h3>
            <p>Con el paso de los años, el entrenamiento de fuerza previene la sarcopenia y fortalece la densidad ósea.</p>
            <h3>Beneficios Clave</h3>
            <ul>
              <li>Aumento de movilidad articular.</li>
              <li>Mejora de la sensibilidad a la insulina.</li>
              <li>Mayor autonomía funcional a largo plazo.</li>
            </ul>
          </div>
          <div class="blog-img">
            <img src="img/ejercicio.jpg" alt="Entrenamiento de fuerza">
          </div>
        </div>

        <p class="blog-final">Recuerda: no busques perfección, busca progreso. Cada pequeño avance cuenta 💙</p>
      </div>
    `,

    "General": `
      <div class="blog-revista">
        <h2 class="blog-titulo">CONCEPTOS GENERALES DE SALUD</h2>
        <p class="blog-categoria">Categoría: GENERAL</p>
        <p class="blog-intro">Herramientas básicas de medición y control para tu día a día.</p>

        <div class="contenedor-cards">

          <!-- Card 1: IMC -> blogs_2.html -->
          <div class="card">
            <img src="img/im4.jpg" alt="IMC">
            <h3>¿Qué es el IMC?</h3>
            <p>Aprende a interpretar el Índice de Masa Corporal y sus rangos de salud.</p>
            <button onclick="abrirSubcard('IMC', 'blogs_2.html')">Ver más</button>
          </div>

          <!-- Card 2: Pérdida de Peso General -> blogs_2.html -->
          <div class="card">
            <img src="img/im4.jpg" alt="Pérdida de Peso">
            <h3>PERDER PESO</h3>
            <p>Definición de déficit calórico y mitos comunes de la báscula.</p>
            <button onclick="abrirSubcard('PerdidaPeso', 'blogs_2.html')">Ver más</button>
          </div>

        </div>
      </div>
    `
  };

  if (blogs[tipo] && contenido && modal) {
    contenido.innerHTML = blogs[tipo];
    modal.classList.add("activo");
  }
}

// 2. Cierra el modal principal
function cerrarBlog() {
  const modal = document.getElementById("modal-blog");
  if (modal) {
    modal.classList.remove("activo");
  }
}

// 3. Redirige a la página correspondiente (blogs.html o blogs_2.html)
function abrirSubcard(tipo, destino = 'blogs.html') {
  window.location.href = `${destino}?art=${tipo}`;
}

// 4. Cierra el modal al dar clic en el fondo/overlay oscuro
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-blog");

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        cerrarBlog();
      }
    });
  }
});
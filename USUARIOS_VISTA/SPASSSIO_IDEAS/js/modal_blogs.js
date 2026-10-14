// Controlador general para apertura y cierre de pantalla emergente de blogs

function abrirBlog(tipoBlog) {
    const overlay = document.getElementById('modal-blog-overlay');
    const modalBody = document.getElementById('blog-modal-body');
    
    let contenidoHTML = '';

    // Llama a la información correspondiente según la sección
    switch (tipoBlog) {
        case 'algo_mas':
            contenidoHTML = typeof getInfoAlgoMas === 'function' 
                ? getInfoAlgoMas() 
                : '<h2>Algo Más</h2><p>Cargando información...</p>';
            break;

        case 'enterate':
            contenidoHTML = typeof getInfoEnterate === 'function' 
                ? getInfoEnterate() 
                : '<h2>Entérate</h2><p>Cargando información...</p>';
            break;

        case 'motivacion':
            contenidoHTML = typeof getInfoMotivacion === 'function' 
                ? getInfoMotivacion() 
                : '<h2>Motivación</h2><p>Cargando información...</p>';
            break;

        case 'tips':
            contenidoHTML = typeof getInfoTips === 'function' 
                ? getInfoTips() 
                : '<h2>Tips</h2><p>Cargando información...</p>';
            break;

        default:
            contenidoHTML = '<h2>Información no disponible</h2>';
    }

    modalBody.innerHTML = contenidoHTML;
    overlay.classList.remove('fade-out');
    overlay.classList.add('active');
}

function cerrarBlogModal() {
    const overlay = document.getElementById('modal-blog-overlay');
    if (overlay) {
        overlay.classList.add('fade-out');
        setTimeout(() => {
            overlay.classList.remove('active', 'fade-out');
        }, 200);
    }
}

// Cerrar al dar clic fuera de la tarjeta blanca
document.addEventListener('click', function(e) {
    const overlay = document.getElementById('modal-blog-overlay');
    if (e.target === overlay) {
        cerrarBlogModal();
    }
});
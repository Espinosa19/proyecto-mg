document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener la ventana modal y el contenedor de contenido
    const modal = document.getElementById('blog-modal');
    const modalBody = document.getElementById('modal-content'); // Asegúrate que este contenedor reciba el HTML

    // 2. Elementos para cerrar
    const closeBtn = document.getElementById('close-modal');
    const closeBtnFooter = document.getElementById('btn-modal-close');

    // Mapeo de botones con sus respectivas funciones de contenido
    const blogData = {
        'btn-enterate': typeof getInfoEnterate === 'function' ? getInfoEnterate : null,
        'btn-tips': typeof getInfoTips === 'function' ? getInfoTips : null,
        'btn-motivacion': typeof getInfoMotivacion === 'function' ? getInfoMotivacion : null,
        'btn-algo-mas': typeof getInfoAlgoMas === 'function' ? getInfoAlgoMas : null
    };

    // 3. Asignar los eventos Clic a los botones mediante su ID o clase
    Object.keys(blogData).forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn && blogData[btnId]) {
            btn.addEventListener('click', () => {
                // Inyectamos todo el HTML renderizado por la función
                modalBody.innerHTML = blogData[btnId]();
                modal.classList.add('active');
            });
        }
    });

    // 4. Lógica para cerrar la ventana emergente
    const closeModal = () => modal.classList.remove('active');

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (closeBtnFooter) closeBtnFooter.addEventListener('click', closeModal);

    // Cerrar si hacen clic fuera del contenedor (en el fondo oscuro)
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
});






 
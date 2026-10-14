document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.app-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            // 1. Desactivar todos los botones de la sidebar
            navButtons.forEach(btn => btn.classList.remove('active'));

            // 2. Ocultar todas las secciones
            sections.forEach(sec => sec.classList.remove('active'));

            // 3. Activar el botón presionado
            button.classList.add('active');

            // 4. Mostrar la sección seleccionada
            const activeSection = document.getElementById(targetId);
            if (activeSection) {
                activeSection.classList.add('active');
            }
        });
    });
});
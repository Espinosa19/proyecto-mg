window.switchTab = function(tabName, element) {
    // 1. Desactivar todos los botones de pestañas y sus contenidos
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // 2. Activar el botón presionado
    if (element) {
        element.classList.add('active');
    }

    // 3. Mostrar la vista elegida
    const target = document.getElementById('tab-' + tabName);
    if (target) {
        target.classList.add('active');
    }
};
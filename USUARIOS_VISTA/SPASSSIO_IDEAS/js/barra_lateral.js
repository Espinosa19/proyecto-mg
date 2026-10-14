document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById('btnMenu');
    const sidebarContainer = document.getElementById('sidebarContainer');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    let barraCargada = false;

    // Función global para cerrar la barra
    function cerrarSidebar() {
        if (sidebarContainer) sidebarContainer.classList.remove('active');
        if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    }

    // Evento al dar clic en el botón de hamburguesa (Menú)
    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            if (sidebarContainer) sidebarContainer.classList.add('active');
            if (sidebarOverlay) sidebarOverlay.classList.add('active');

            // Solo hacemos el fetch si no se ha cargado antes
            if (!barraCargada && sidebarContainer) {
                sidebarContainer.innerHTML = `
                    <div style="padding:30px; text-align:center;">
                        <i class="fas fa-spinner fa-spin" style="font-size:2rem; color:#0a84b1;"></i>
                        <p style="font-family:sans-serif; margin-top:10px; color:#4a5568;">Cargando menú...</p>
                    </div>`;
                
                fetch('barra_lateral.html')
                    .then(response => {
                        if (!response.ok) throw new Error("No se pudo obtener el archivo barra_lateral.html");
                        return response.text();
                    })
                    .then(html => {
                        sidebarContainer.innerHTML = html;
                        barraCargada = true;
                    })
                    .catch(err => {
                        sidebarContainer.innerHTML = `
                            <div style="padding: 20px; color: #e74c3c; text-align:center; font-family:sans-serif;">
                                <i class="fas fa-exclamation-circle" style="font-size:2rem; margin-bottom:10px;"></i>
                                <p>Error al cargar el menú lateral.</p>
                            </div>`;
                        console.error(err);
                    });
            }
        });
    }

    // Cierra si el usuario hace clic en la cortina oscura de fondo
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', cerrarSidebar);
    }

    // ESCUCHADOR GLOBAL PARA EL BOTÓN DE CIERRE (Delegación de eventos)
    // Funciona de inmediato con id="btn-cerrar" o id="btn-cerrar-sidebar"
    document.addEventListener('click', (e) => {
        if (e.target.closest('#btn-cerrar') || e.target.closest('#btn-cerrar-sidebar')) {
            cerrarSidebar();
        }
    });
});
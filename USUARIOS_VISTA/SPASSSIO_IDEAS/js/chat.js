// js/chat.js

document.addEventListener('DOMContentLoaded', () => {
    const btnChat = document.getElementById('btnChat');
    const popoverChat = document.getElementById('popover-chat');

    if (btnChat && popoverChat) {
        // Toggle de chat
        btnChat.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Cerrar el popover de notificaciones si está abierto (limpiando animación)
            const popoverNotifications = document.getElementById('popover-notifications');
            if (popoverNotifications) {
                popoverNotifications.classList.remove('active', 'fade-out');
            }

            // Si ya está activo, aplicamos animación de salida antes de cerrar
            if (popoverChat.classList.contains('active')) {
                popoverChat.classList.add('fade-out');
                setTimeout(() => {
                    popoverChat.classList.remove('active', 'fade-out');
                }, 200);
            } else {
                // Si está cerrado, quitamos fade-out y lo mostramos
                popoverChat.classList.remove('fade-out');
                popoverChat.classList.add('active');
            }
        });
    }

    // Cerrar cualquier popover con desvanecimiento al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.popover-wrapper')) {
            document.querySelectorAll('.popover-panel.active').forEach(panel => {
                panel.classList.add('fade-out');
                setTimeout(() => {
                    panel.classList.remove('active', 'fade-out');
                }, 200);
            });
        }
    });
});
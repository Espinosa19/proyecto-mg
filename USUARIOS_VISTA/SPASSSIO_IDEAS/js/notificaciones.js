// js/notificaciones.js

document.addEventListener('DOMContentLoaded', () => {
    const btnNotification = document.getElementById('btnNotification');
    const popoverNotifications = document.getElementById('popover-notifications');

    if (btnNotification && popoverNotifications) {
        // Toggle de notificaciones
        btnNotification.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Cerrar el popover de chat si está abierto
            const popoverChat = document.getElementById('popover-chat');
            if (popoverChat) popoverChat.classList.remove('active','fade-out');

            // Abrir/cerrar notificaciones
             popoverNotifications.classList.remove('fade-out');
            popoverNotifications.classList.toggle('active');
        });
    }
});

// Función global o utilitaria si necesitas marcar como leídas
function marcarNotificacionesLeidas() {
    const items = document.querySelectorAll('#popover-notifications .popover-item.unread');
    items.forEach(item => item.classList.remove('unread'));
    
    // Actualizar el badge a 0
    const badge = document.querySelector('#btnNotification .badge');
    if (badge) badge.style.display = 'none';
}


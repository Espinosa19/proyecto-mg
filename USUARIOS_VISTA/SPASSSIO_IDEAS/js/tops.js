// ==========================================
// DATOS MOCK / EJEMPLO SEGÚN PERÍODO
// ==========================================
const datosRanking = {
    semanal: {
        podium: [
            { pos: 1, nombre: "1. US12 Carlos Ruiz", puntos: 150, coronas: 3 },
            { pos: 2, nombre: "2. US04 Ana Gómez", puntos: 120, coronas: 2 },
            { pos: 3, nombre: "3. US19 Luis Peralta", puntos: 95, coronas: 1 }
        ],
        lista: [
            { rank: "#4", nombre: "US52 Apellido no disponible", pts: "80 pts" },
            { rank: "#5", nombre: "US31 Mariela Torres", pts: "60 pts" }
        ]
    },
    mes: {
        podium: [
            { pos: 1, nombre: "1. US7 Apellido no disponible", puntos: 450, coronas: 5 },
            { pos: 2, nombre: "2. US8 Apellido no disponible", puntos: 380, coronas: 4 },
            { pos: 3, nombre: "3. US49 Apellido no disponible", puntos: 310, coronas: 2 }
        ],
        lista: [
            { rank: "#4", nombre: "US52 Apellido no disponible", pts: "290 pts" },
            { rank: "#5", nombre: "US15 Fernando Vega", pts: "210 pts" }
        ]
    },
    ano: {
        podium: [
            { pos: 1, nombre: "1. US01 Valeria Mendoza", puntos: 2400, coronas: 18 },
            { pos: 2, nombre: "2. US07 Apellido no disponible", puntos: 1980, coronas: 14 },
            { pos: 3, nombre: "3. US22 Gabriel Silva", puntos: 1650, coronas: 11 }
        ],
        lista: [
            { rank: "#4", nombre: "US08 Apellido no disponible", pts: "1400 pts" },
            { rank: "#5", nombre: "US49 Apellido no disponible", pts: "1250 pts" }
        ]
    }
};

/**
 * Función que activa el botón presionado y actualiza la vista con animación
 * @param {string} periodo - 'semanal', 'mes' o 'ano'
 * @param {HTMLElement} btn - El botón que recibió el click
 */
function filtrarTop(periodo, btn) {
    // 1. Cambiar estado visual activo en los botones
    if (btn) {
        document.querySelectorAll('.btn-top-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    // 2. Obtener la data correspondiente
    const data = datosRanking[periodo];
    if (!data) return;

    // 3. Renderizar Podio (Lugares 1, 2 y 3) con animación
    data.podium.forEach(user => {
        const placeElement = document.querySelector(`.podium-item.place-${user.pos}`);
        if (placeElement) {
            // Reiniciar clase de animación para replay
            placeElement.classList.remove('top-fade-animated');
            void placeElement.offsetWidth; // Forzar reflow

            const nameEl = placeElement.querySelector('.user-name');
            const statsEls = placeElement.querySelectorAll('.user-stats');

            if (nameEl) nameEl.textContent = user.nombre;
            if (statsEls[0]) statsEls[0].textContent = `Puntos totales: ${user.puntos}`;
            if (statsEls[1]) statsEls[1].textContent = `Coronas: ${user.coronas}`;

            placeElement.classList.add('top-fade-animated');
        }
    });

    // 4. Renderizar Lista Restante (Posición #4 en adelante) con animación
    const listContainer = document.getElementById('ranking-list-container');
    if (listContainer) {
        listContainer.classList.remove('top-fade-animated');
        void listContainer.offsetWidth; // Forzar reflow

        listContainer.innerHTML = ''; // Limpiar contenedor
        
        data.lista.forEach(user => {
            const itemHTML = `
                <div class="ranking-item">
                    <span class="rank-number">${user.rank}</span>
                    <div class="ranking-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <span class="ranking-name">${user.nombre}</span>
                    <span class="ranking-pts">${user.pts}</span>
                </div>
            `;
            listContainer.insertAdjacentHTML('beforeend', itemHTML);
        });

        listContainer.classList.add('top-fade-animated');
    }
}
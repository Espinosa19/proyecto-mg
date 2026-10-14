const datos = {
    semana: {
        top: [
            { nombre: "US1", puntos: 12 },
            { nombre: "US2", puntos: 9 },
            { nombre: "US3", puntos: 6 }
        ],
        lista: ["US4", "US5", "US6", "US7", "US8", "US9", "US10"]
    },
    mes: {
        top: [
            { nombre: "US2", puntos: 40 },
            { nombre: "US5", puntos: 34 },
            { nombre: "US1", puntos: 30 }
        ],
        lista: ["US3", "US4", "US6", "US7", "US8", "US9", "US10"]
    },
    anio: {
        top: [
            { nombre: "US7", puntos: 200 },
            { nombre: "US1", puntos: 180 },
            { nombre: "US4", puntos: 150 }
        ],
        lista: ["US2", "US3", "US5", "US6", "US8", "US9", "US10"]
    }
};

function render(periodo) {
    const podium = document.getElementById("podium");
    const lista = document.getElementById("listaUsuarios");

    if (!podium || !lista) return; // Evita errores si no encuentra los elementos

    podium.innerHTML = "";
    lista.innerHTML = "";

    // Renderizar Podio
    datos[periodo].top.forEach((u, i) => {
        const clase = i === 0 ? "player first" : "player";
        podium.innerHTML += `
            <div class="${clase}">
                <div class="crown"><i class="fas fa-crown"></i></div>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Avatar">
                <div><strong>${i + 1}. ${u.nombre}</strong></div>
                <div style="font-size:.8rem;color:#666;">Puntos: ${u.puntos}</div>
            </div>`;
    });

    // Renderizar Lista
    datos[periodo].lista.forEach((u, i) => {
        lista.innerHTML += `
            <div class="user">
                <div class="user-left">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Avatar">
                    <span>#${i + 4} ${u}</span>
                </div>
                <div>0 pts</div>
            </div>`;
    });
}

function cambiarPeriodo(periodo, btn) {
    // Quitar clase activa a todos los botones
    document.querySelectorAll(".periods button").forEach(b => b.classList.remove("active"));
    // Poner clase activa al botón presionado
    btn.classList.add("active");
    // Renderizar datos
    render(periodo);
}

// Inicialización segura
document.addEventListener("DOMContentLoaded", () => {
    render("semana");
});
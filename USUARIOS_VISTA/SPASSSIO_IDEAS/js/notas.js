document.addEventListener('DOMContentLoaded', () => {
    const btnGuardar = document.querySelector('.btn-guardar-nota');
    const inputNota = document.querySelector('.input-nota');

    if (btnGuardar) {
        btnGuardar.addEventListener('click', () => {
            const texto = inputNota.value;
            if (texto.trim() === '') return;

            alert('Nota guardada con éxito');
            // Aquí puedes hacer un fetch a tu API o guardar en localStorage
        });
    }
});
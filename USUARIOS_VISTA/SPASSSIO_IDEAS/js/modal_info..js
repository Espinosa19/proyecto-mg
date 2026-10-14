function abrirModal(titulo, texto) {
  const modal = document.getElementById('modal-info');
  document.getElementById('modal-titulo').innerText = titulo;
  document.getElementById('modal-texto').innerText = texto;
  modal.classList.add('active');
}

function cerrarModal() {
  const modal = document.getElementById('modal-info');
  modal.classList.remove('active');
}

// Cerrar también haciendo clic fuera del recuadro blanco
function cerrarModalAfuera(event) {
  if (event.target.classList.contains('modal-overlay')) {
    cerrarModal();
  }
}
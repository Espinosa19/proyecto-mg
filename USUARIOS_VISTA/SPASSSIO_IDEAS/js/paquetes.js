function abrirPaquete(paqueteId, btn) {
  // 1. Ocultar todos los contenidos de paquetes
  const contenedores = document.querySelectorAll('.paquete-info');
  contenedores.forEach(info => info.classList.remove('active'));

  // 2. Quitar el subrayado/activo de todos los botones
  const botones = document.querySelectorAll('.paquete-btn');
  botones.forEach(b => b.classList.remove('active'));

  // 3. Activar el paquete seleccionado y su botón
  document.getElementById(paqueteId).classList.add('active');
  btn.classList.add('active');
}
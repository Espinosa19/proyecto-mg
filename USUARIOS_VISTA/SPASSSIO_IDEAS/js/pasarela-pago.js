(function () {
  // 1. Inyectar los estilos CSS de los modales de forma dinámica
  const estilosCSS = `
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2000;
      animation: fadeInModal 0.2s ease-in-out;
    }
    .modal-contenido {
      background-color: #ffffff;
      padding: 30px;
      border-radius: 16px;
      width: 90%;
      max-width: 400px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      position: relative;
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
    }
    .modal-cerrar-X {
      position: absolute;
      top: 12px;
      right: 15px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #888;
    }
    .modal-cerrar-X:hover {
      color: #333;
    }
    .modal-titulo {
      font-size: 22px;
      color: #2b2d42;
      font-weight: bold;
      margin-bottom: 6px;
    }
    .modal-subtitulo {
      font-size: 14px;
      color: #666;
      margin-bottom: 20px;
    }
    .modal-opciones-pago {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .btn-metodo {
      padding: 14px;
      font-size: 16px;
      font-weight: bold;
      border: 2px solid #008b99;
      background-color: #f4f9f9;
      color: #008b99;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-metodo:hover {
      background-color: #008b99;
      color: #ffffff;
    }
    .form-grupo {
      text-align: left;
      margin-bottom: 10px;
    }
    .form-grupo label {
      font-size: 13px;
      font-weight: bold;
      color: #444;
      display: block;
      margin-bottom: 6px;
    }
    .input-estilizado {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 16px;
      outline: none;
      box-sizing: border-box;
    }
    .input-estilizado:focus {
      border-color: #008b99;
    }
    .contenedor-codigo-barras {
      background: #f9f9f9;
      padding: 15px;
      border-radius: 8px;
      border: 1px dashed #ccc;
      margin-bottom: 20px;
    }
    .barras-simulacion {
      height: 50px;
      background: repeating-linear-gradient(90deg, #000, #000 3px, #fff 3px, #fff 7px);
      margin-bottom: 8px;
    }
    .codigo-numero {
      font-family: monospace;
      font-size: 14px;
      letter-spacing: 2px;
      color: #333;
    }
    .acciones-ventanilla {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }
    .btn-accion-secundaria {
      background: none;
      border: none;
      color: #008b99;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      text-decoration: underline;
    }
    .btn-modal-accion {
      border: none;
      color: #ffffff;
      font-size: 17px;
      font-weight: bold;
      padding: 12px 0;
      width: 100%;
      border-radius: 4px;
      cursor: pointer;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
      margin-top: 10px;
    }
    .btn-verde-modal { background-color: #6bb239; }
    .btn-naranja-modal { background-color: #e0721b; }
    @keyframes fadeInModal {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
  `;

  const estiloElemento = document.createElement('style');
  estiloElemento.innerHTML = estilosCSS;
  document.head.appendChild(estiloElemento);

  // 2. Inyectar el HTML de los modales al final del body
  const estructuraModales = `
    <!-- MODAL GENERAL / SELECCIÓN DE MÉTODO DE PAGO -->
    <div id="modal-metodo-pago" class="modal-overlay" style="display: none;">
      <div class="modal-contenido">
        <button class="modal-cerrar-X" onclick="window.cerrarModalGlobal('modal-metodo-pago')">&times;</button>
        <h2 class="modal-titulo">Obtener paquete</h2>
        <p class="modal-subtitulo">Selecciona el método de pago</p>
        <div class="modal-opciones-pago">
          <button class="btn-metodo" onclick="window.abrirModalTarjetaJS()">💳 Tarjeta</button>
          <button class="btn-metodo" onclick="window.abrirModalVentanillaJS()">🏢 Ventanilla</button>
        </div>
      </div>
    </div>

    <!-- MODAL DE PAGO CON TARJETA -->
    <div id="modal-tarjeta" class="modal-overlay" style="display: none;">
      <div class="modal-contenido">
        <button class="modal-cerrar-X" onclick="window.cerrarModalGlobal('modal-tarjeta')">&times;</button>
        <h2 class="modal-titulo">Pago del paquete</h2>
        <p class="modal-subtitulo" id="texto-precio-tarjeta">Cantidad a pagar: $0.00</p>
        <div class="form-grupo">
          <label>Número de Tarjeta</label>
          <input type="text" placeholder="1234 5678 9012 3456" maxlength="19" class="input-estilizado">
        </div>
        <button class="btn-modal-accion btn-verde-modal" onclick="window.ejecutarPagoExitosoJS()">Continuar</button>
      </div>
    </div>

    <!-- MODAL DE PAGO POR VENTANILLA -->
    <div id="modal-ventanilla" class="modal-overlay" style="display: none;">
      <div class="modal-contenido">
        <button class="modal-cerrar-X" onclick="window.cerrarModalGlobal('modal-ventanilla')">&times;</button>
        <h2 class="modal-titulo">Total a pagar</h2>
        <p class="modal-subtitulo" id="texto-precio-ventanilla" style="font-size: 20px; font-weight: bold; color: #2b2d42;">$0.00</p>
        <div class="contenedor-codigo-barras">
          <div class="barras-simulacion"></div>
          <span class="codigo-numero">7501032849102</span>
        </div>
        <div class="acciones-ventanilla">
          <button class="btn-accion-secundaria" onclick="window.print()">Imprimir</button>
          <button class="btn-modal-accion btn-naranja-modal" onclick="window.ejecutarPagoExitosoJS()">Pagar</button>
        </div>
      </div>
    </div>

    <!-- MODAL DE PAGO EXITOSO -->
    <div id="modal-exitoso" class="modal-overlay" style="display: none;">
      <div class="modal-contenido">
        <div style="font-size: 40px; margin-bottom: 5px;">🎉</div>
        <h2 class="modal-titulo" style="color: #6bb239; margin-top: 5px;">¡Pago Exitoso!</h2>
        <p class="modal-subtitulo" style="font-size: 16px; margin-bottom: 20px;">¡Disfruta tus entrenamientos!</p>
        <button class="btn-modal-accion btn-verde-modal" onclick="window.cerrarModalGlobal('modal-exitoso')">Cerrar</button>
      </div>
    </div>
  `;

  const divContenedor = document.createElement('div');
  divContenedor.innerHTML = estructuraModales;
  document.body.appendChild(divContenedor);

  // 3. Lógica e interactividad de los botones
  let precioSeleccionado = "$0.00";

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-tarjeta').forEach(boton => {
      boton.addEventListener('click', (e) => {
        const tarjeta = e.target.closest('.tarjeta') || e.target.closest('.tarjeta-central') || e.target.closest('.tarjeta-empresarial');
        if (tarjeta) {
          const elementoPrecio = tarjeta.querySelector('.precio-tarjeta');
          if (elementoPrecio) {
            precioSeleccionado = elementoPrecio.textContent;
          }
        }
        document.getElementById('modal-metodo-pago').style.display = 'flex';
      });
    });
  });

  window.abrirModalTarjetaJS = function() {
    document.getElementById('modal-metodo-pago').style.display = 'none';
    document.getElementById('texto-precio-tarjeta').textContent = "Cantidad a pagar: " + precioSeleccionado;
    document.getElementById('modal-tarjeta').style.display = 'flex';
  };

  window.abrirModalVentanillaJS = function() {
    document.getElementById('modal-metodo-pago').style.display = 'none';
    document.getElementById('texto-precio-ventanilla').textContent = precioSeleccionado;
    document.getElementById('modal-ventanilla').style.display = 'flex';
  };

  window.ejecutarPagoExitosoJS = function() {
    document.getElementById('modal-tarjeta').style.display = 'none';
    document.getElementById('modal-ventanilla').style.display = 'none';
    document.getElementById('modal-exitoso').style.display = 'flex';
  };

  window.cerrarModalGlobal = function(idModal) {
    document.getElementById(idModal).style.display = 'none';
  };
})();
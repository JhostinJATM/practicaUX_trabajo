// Cuenta regresiva simulada del tiempo restante
let tiempo = 15 * 60; // 15 minutos en segundos

function actualizarTiempo() {
  const tiempoElem = document.querySelector(".tiempo p strong");
  if (!tiempoElem) return;
  const minutos = Math.floor(tiempo / 60);
  const segundos = tiempo % 60;
  tiempoElem.textContent = `${minutos}:${segundos.toString().padStart(2, "0")}`;
  if (tiempo > 0) tiempo--;
}

setInterval(actualizarTiempo, 1000);

document.getElementById('btn-ver-resultados').addEventListener('click', () => {
  window.location.href = 'resultado-partido.html';
});

// Drawer y menú hamburguesa para móviles
const menuToggle = document.querySelector('.menu-toggle');
const drawer = document.getElementById('drawerMenu');
const backdrop = document.getElementById('drawerBackdrop');

if (menuToggle && drawer && backdrop) {
  menuToggle.addEventListener('click', () => {
    drawer.classList.toggle('open');
    backdrop.classList.toggle('open');
  });
  backdrop.addEventListener('click', () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
  });
}

const closeBtn = document.querySelector('.drawer-close-btn');
if (closeBtn && drawer && backdrop) {
  closeBtn.addEventListener('click', () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
  });
}

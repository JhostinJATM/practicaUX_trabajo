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

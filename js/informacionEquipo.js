// Drawer y menú hamburguesa para móviles
const menuToggle = document.querySelector('.menu-toggle');
const drawer = document.getElementById('drawerMenu');
const backdrop = document.getElementById('drawerBackdrop');
const closeBtn = document.querySelector('.drawer-close-btn');

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

if (closeBtn && drawer && backdrop) {
  closeBtn.addEventListener('click', () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
  });
}
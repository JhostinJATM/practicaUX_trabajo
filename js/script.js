const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.tab-section');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Activar pestaña
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Mostrar sección correspondiente
    sections.forEach(section => {
      section.classList.remove('active');
    });
    const target = document.getElementById(tab.dataset.target); 
    target.classList.add('active');
  });
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

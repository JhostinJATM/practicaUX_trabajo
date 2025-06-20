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

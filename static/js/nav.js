document.addEventListener('DOMContentLoaded', () => {
  // Nav
  fetch('components/nav.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('nav-placeholder').innerHTML = html;

      const dropdown = document.querySelector('.nav-dropdown');
      const dropdownBtn = document.querySelector('.nav-dropdown-btn');

      dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
      });

      document.addEventListener('click', () => {
        dropdown.classList.remove('open');
      });
    })
    .catch(err => console.error('Nav fetch falló:', err));

});
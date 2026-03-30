document.addEventListener('DOMContentLoaded', () => {
     fetch('components/architecture-modal.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('architecture-modal').innerHTML = html;
     // Modal invitation
      const overlay = document.getElementById('modal-architecture');
      const openBtn = document.querySelector('.art_architecture_title_img button');
      const closeBtn = document.getElementById('modal-architecture-close-btn');

      if (openBtn) openBtn.addEventListener('click', () => overlay.classList.add('active'));
      if (closeBtn) closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
      if (overlay) overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          overlay?.classList.remove('active');
        }
      });

    })
    .catch(err => console.error('Modal fetch falló:', err));
});
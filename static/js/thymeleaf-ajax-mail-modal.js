document.addEventListener('DOMContentLoaded', () => {
  fetch('components/thymeleaf-ajax-mail-modal.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('modal-thymeleaf-placeholder').innerHTML = html;

      const overlay = document.getElementById('modal-thymeleaf-ajax-mail');
      const openBtn = document.querySelector('#art-thymeleaf ~ * button, .learnings_img_btn_box button[data-modal="thymeleaf"]');
      const closeBtn = document.getElementById('modal-thymeleaf-close-btn');

      if (openBtn) openBtn.addEventListener('click', () => overlay.classList.add('active'));
      if (closeBtn) closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
      if (overlay) overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') overlay?.classList.remove('active');
      });
    })
    .catch(err => console.error('Modal thymeleaf fetch falló:', err));
});
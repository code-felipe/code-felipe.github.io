// roles-modal.js
document.addEventListener('DOMContentLoaded', () => {

  fetch('components/roles-modal.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('roles-modal').innerHTML = html;

      // Modal roles
      const overlay = document.getElementById('modal-roles');
      const openBtn = document.querySelector('.learnings_img_btn_box button');
      const closeBtn = document.getElementById('modal-close-btn');

      if (openBtn) openBtn.addEventListener('click', () => overlay.classList.add('active'));
      if (closeBtn) closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
      if (overlay) overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
      });

      // Modal invitation
    //   const overlayInvitation = document.getElementById('modal-invitation');
    //   const openBtnInvitation = document.querySelector('.art_invite_title_img button');
    //   const closeBtnInvitation = document.getElementById('modal-invitation-close-btn');

    //   if (openBtnInvitation) openBtnInvitation.addEventListener('click', () => overlayInvitation.classList.add('active'));
    //   if (closeBtnInvitation) closeBtnInvitation.addEventListener('click', () => overlayInvitation.classList.remove('active'));
    //   if (overlayInvitation) overlayInvitation.addEventListener('click', (e) => {
    //     if (e.target === overlayInvitation) overlayInvitation.classList.remove('active');
    //   });

      // Escape cierra cualquier modal activo
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          overlay?.classList.remove('active');
        //   overlayInvitation?.classList.remove('active');
        }
      });

    })
    .catch(err => console.error('Modal fetch falló:', err));

});
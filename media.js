/* Add approved video paths here; the same CoFiNav clip appears on both pages. */
const VIDEO_SOURCES = {
  throwing: '',
  cofinav: 'files/cofinav.mp4',
  'uav-ugv': 'files/UGVUAV.mp4'
};

document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.createElement('dialog');
  dialog.className = 'video-dialog';
  dialog.innerHTML = '<button class="video-close" type="button" aria-label="Close video">×</button><div class="video-dialog-content"></div>';
  document.body.appendChild(dialog);
  const content = dialog.querySelector('.video-dialog-content');
  const close = () => {
    content.querySelector('video')?.pause();
    dialog.close();
    content.replaceChildren();
  };
  dialog.querySelector('.video-close').addEventListener('click', close);
  dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
  dialog.addEventListener('click', event => { if (event.target === dialog) close(); });

  document.querySelectorAll('.media-slot').forEach(slot => {
    const src = VIDEO_SOURCES[slot.dataset.video];
    if (!src) {
      slot.disabled = true;
      slot.title = 'Coming Soon';
      return;
    }
    const preview = document.createElement('video');
    preview.src = src;
    preview.autoplay = true;
    preview.muted = true;
    preview.loop = true;
    preview.playsInline = true;
    preview.preload = 'metadata';
    slot.replaceChildren(preview);
    slot.disabled = false;
    slot.addEventListener('click', () => {
      const large = preview.cloneNode();
      large.controls = true;
      large.autoplay = true;
      large.muted = true;
      content.appendChild(large);
      dialog.showModal();
      large.play().catch(() => {});
    });
  });
});

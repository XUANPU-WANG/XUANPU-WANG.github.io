document.addEventListener('DOMContentLoaded', () => {
  initializeDarkMode();
  initializeBackToTop();
  document.querySelectorAll('[data-pending-link]').forEach(link => {
    link.addEventListener('click', event => event.preventDefault());
  });
});

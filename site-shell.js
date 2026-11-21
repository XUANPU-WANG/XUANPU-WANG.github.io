/* Shared navigation and footer using the template classes. */
(() => {
  const pages = [['index.html','Home'],['projects.html','Projects'],['publications.html','Publications'],['cv.html','CV']];
  function render() {
    const current = location.pathname.split('/').pop() || 'index.html';
    document.getElementById('site-nav').innerHTML = `<a class="skip-link" href="#main-content">Skip to main content</a><nav class="nav-buttons" aria-label="Main navigation">${pages.map(([url,label]) => `<a class="nav-button" href="${url}"${current === url ? ' aria-current="page"' : ''}>${label}</a>`).join('')}<button id="theme-toggle" class="theme-toggle" type="button" aria-label="Toggle dark mode"></button></nav>`;
    document.getElementById('site-footer').innerHTML = `<div class="page-shell-footer"><footer class="site-footer"><p class="footer-copyright">© ${new Date().getFullYear()} Xuanpu Wang</p></footer></div><button id="back-to-top" class="back-to-top" aria-label="Back to top" type="button">↑</button>`;
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();

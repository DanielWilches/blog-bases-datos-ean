/**
 * Blog Académico de Bases de Datos - Universidad EAN
 * Interactive behaviors: Theme switch, Search/Filter, Code Copy, Progress Bar
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initProgressBar();
  initMobileMenu();
  initCodeCopy();
  initSearchAndFilter();
});

/* Theme Switcher */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(toggleBtn, currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(toggleBtn, newTheme);
    });
  }
}

function updateThemeIcon(btn, theme) {
  if (!btn) return;
  if (theme === 'dark') {
    btn.innerHTML = `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`;
    btn.setAttribute('aria-label', 'Cambiar a modo claro');
  } else {
    btn.innerHTML = `<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
    btn.setAttribute('aria-label', 'Cambiar a modo oscuro');
  }
}

/* Reading Progress Bar */
function initProgressBar() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  });
}

/* Mobile Menu */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });
  }
}

/* Code Copy */
function initCodeCopy() {
  document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', async () => {
      const pre = button.closest('.code-block').querySelector('pre');
      if (!pre) return;
      
      const code = pre.innerText;
      try {
        await navigator.clipboard.writeText(code);
        const originalText = button.innerText;
        button.innerText = '¡Copiado!';
        button.style.borderColor = 'var(--accent-emerald)';
        button.style.color = 'var(--accent-emerald)';
        setTimeout(() => {
          button.innerText = originalText;
          button.style.borderColor = '';
          button.style.color = '';
        }, 2000);
      } catch (err) {
        console.error('Error al copiar texto: ', err);
      }
    });
  });
}

/* Search and Filters */
function initSearchAndFilter() {
  const searchInput = document.getElementById('topic-search');
  const filterPills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.topic-card');

  if (!cards.length) return;

  function filterCards() {
    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const activePill = document.querySelector('.filter-pill.active');
    const activeCategory = activePill ? activePill.getAttribute('data-category') : 'all';

    cards.forEach(card => {
      const title = (card.querySelector('.card-title')?.innerText || '').toLowerCase();
      const excerpt = (card.querySelector('.card-excerpt')?.innerText || '').toLowerCase();
      const category = card.getAttribute('data-category') || '';
      
      const matchesQuery = !query || title.includes(query) || excerpt.includes(query);
      const matchesCategory = activeCategory === 'all' || category === activeCategory;

      if (matchesQuery && matchesCategory) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterCards);
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterCards();
    });
  });
}

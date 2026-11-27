document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  const closeMenu = () => {
    navMenu.classList.remove('open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    navMenu.classList.add('open');
    menuToggle.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
  };

  menuToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Dark & Light Theme Switcher
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');
  const STORAGE_KEY = 'portfolio_theme_mode';

  const applyTheme = (mode) => {
    const isLight = mode === 'light';
    document.body.classList.toggle('light-mode', isLight);
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(isLight));
    }
    if (themeIcon) {
      themeIcon.innerHTML = isLight ? '&#9790;' : '&#9728;';
    }
    if (themeLabel) {
      themeLabel.textContent = isLight ? 'Dark' : 'Light';
    }
  };

  const savedTheme = localStorage.getItem(STORAGE_KEY) || 'dark';
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
      localStorage.setItem(STORAGE_KEY, nextTheme);
      applyTheme(nextTheme);
    });
  }

  // Profile Picture Fallback Notice
  const profilePhoto = document.getElementById('profilePhoto');
  const profileFallback = document.getElementById('profileFallback');

  if (profilePhoto && profileFallback) {
    profilePhoto.addEventListener('error', () => {
      profilePhoto.style.display = 'none';
      profileFallback.hidden = false;
    });
    profilePhoto.addEventListener('load', () => {
      profilePhoto.style.display = 'block';
      profileFallback.hidden = true;
    });
  }

  // Certificate Modal Logic
  const certModal = document.getElementById('certModal');
  const certModalTitle = document.getElementById('certModalTitle');
  const certModalImg = document.getElementById('certModalImg');
  const certModalFallback = document.getElementById('certModalFallback');
  const certModalClose = document.getElementById('certModalClose');

  const openCertModal = (imgSrc, titleText) => {
    if (!certModal) return;
    certModalTitle.textContent = titleText || 'Certificate Preview';
    certModalFallback.textContent = '';
    certModalImg.style.display = 'block';
    certModalImg.src = imgSrc;
    certModal.classList.add('active');
    certModal.setAttribute('aria-hidden', 'false');
  };

  const closeCertModal = () => {
    if (!certModal) return;
    certModal.classList.remove('active');
    certModal.setAttribute('aria-hidden', 'true');
    certModalImg.src = '';
    certModalFallback.textContent = '';
  };

  if (certModalImg) {
    certModalImg.addEventListener('error', () => {
      if (!certModal.classList.contains('active')) return;
      certModalImg.style.display = 'none';
      certModalFallback.textContent =
        'Certificate image not found yet at "' +
        certModalImg.getAttribute('src') +
        '". Place your certificate image in that path or update data-cert-img in index.html.';
    });
  }

  document.querySelectorAll('[data-cert-img]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const imgSrc = btn.getAttribute('data-cert-img');
      const titleText = btn.getAttribute('data-cert-title');
      openCertModal(imgSrc, titleText);
    });
  });

  if (certModalClose) {
    certModalClose.addEventListener('click', closeCertModal);
  }

  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) {
        closeCertModal();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (certModal && certModal.classList.contains('active')) {
        closeCertModal();
      } else if (navMenu.classList.contains('open')) {
        closeMenu();
      }
    }
  });
});
/* Portfolio web de Jesús / chiissuu */

/* MENÚ RESPONSIVE + CAMBIO DE TEMA + ENLACE ACTIVO */
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('menu');
  const menuToggle = document.getElementById('menu-toggle');
  const menuLinks = document.getElementById('menu-links');

  if (!menu || !menuToggle || !menuLinks) return;

  const navLinks = Array.from(menu.querySelectorAll('a[href*="#"]'));
  const menuCloseLinks = Array.from(menuLinks.querySelectorAll('a'));
  const observedSections = Array.from(document.querySelectorAll('header[id], section[id]'));

  function isLightSection(section) {
    return section.classList.contains('section-light');
  }

  function updateMenuTheme(section) {
    if (!section) return;

    menu.classList.toggle('menu-on-light', isLightSection(section));
    menu.classList.toggle('menu-on-dark', !isLightSection(section));
  }

  function updateActiveLink(section) {
    if (!section || !section.id) return;

    navLinks.forEach(function (link) {
      const linkTarget = new URL(link.getAttribute('href'), window.location.href).hash;
      link.classList.toggle('active', linkTarget === `#${section.id}`);
    });
  }

  function setCurrentSection(section) {
    updateMenuTheme(section);
    updateActiveLink(section);
  }

  function getCurrentSectionByScroll() {
    if (observedSections.length === 0) return null;

    const menuHeight = menu.offsetHeight;
    const referenceLine = window.scrollY + menuHeight + 80;

    let currentSection = observedSections[0];

    observedSections.forEach(function (section) {
      if (section.offsetTop <= referenceLine) {
        currentSection = section;
      }
    });

    return currentSection;
  }

  /* Estado inicial */
  setCurrentSection(getCurrentSectionByScroll());

  /* Actualización al hacer scroll */
  let ticking = false;

  window.addEventListener('scroll', function () {
    if (ticking) return;

    window.requestAnimationFrame(function () {
      setCurrentSection(getCurrentSectionByScroll());
      ticking = false;
    });

    ticking = true;
  });

  /* Menú móvil */
  menuToggle.addEventListener('click', function () {
    menuLinks.classList.toggle('open');

    const isOpen = menuLinks.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  menuCloseLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menuLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
});

/* BOTÓN VOLVER ARRIBA */
document.addEventListener('DOMContentLoaded', function () {
  const botonArriba = document.getElementById('botonarriba');

  if (!botonArriba) return;

  botonArriba.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});


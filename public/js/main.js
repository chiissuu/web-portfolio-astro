/* Portfolio web de Jesús / chiissuu */

/* MENÚ RESPONSIVE + CAMBIO DE TEMA + ENLACE ACTIVO */
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('menu');
  const menuToggle = document.getElementById('menu-toggle');
  const menuLinks = document.getElementById('menu-links');

  if (!menu || !menuToggle || !menuLinks) return;

  const navLinks = Array.from(menu.querySelectorAll('a[href^="#"]'));
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
      const linkTarget = link.getAttribute('href');
      link.classList.toggle('active', linkTarget === `#${section.id}`);
    });
  }

  function setCurrentSection(section) {
    updateMenuTheme(section);
    updateActiveLink(section);
  }

  function getCurrentSectionByScroll() {
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

  navLinks.forEach(function (link) {
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

/* CARRUSEL DE GALERÍA */
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.carousel-track');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  if (!track || !indicatorsContainer) return;

  const slides = Array.from(track.children);
  let currentIndex = 0;

  slides.forEach(function (_, index) {
    const button = document.createElement('button');

    if (index === 0) {
      button.classList.add('active');
    }

    indicatorsContainer.appendChild(button);
  });

  const indicators = Array.from(indicatorsContainer.children);

  function moveToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
    updateIndicators();
  }

  function updateIndicators() {
    indicators.forEach(function (dot, index) {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  indicators.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
      moveToSlide(index);
    });
  });

  setInterval(function () {
    const nextIndex = (currentIndex + 1) % slides.length;
    moveToSlide(nextIndex);
  }, 3500);
});


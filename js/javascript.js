// ─────────────────────────────────────────────
// 1. FORMULARIO DE CONTACTO
// ─────────────────────────────────────────────

const formulario = document.getElementById('formulario');
const mensajeExito = document.getElementById('exito');

if (formulario && mensajeExito) {
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    mensajeExito.style.display = 'block';
    formulario.reset();

    setTimeout(function () {
      mensajeExito.style.display = 'none';
    }, 4000);
  });
}


// ─────────────────────────────────────────────
// 2. SCROLL 
// ─────────────────────────────────────────────

const enlaces = document.querySelectorAll('.nav-links a');
const secciones = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let seccionActual = '';

  const scrollPos = window.scrollY + 130;

  secciones.forEach(seccion => {
    if (scrollPos >= seccion.offsetTop) {
      seccionActual = seccion.id;
    }
  });

  enlaces.forEach(enlace => {
    enlace.classList.remove('active');

    if (enlace.getAttribute('href') === '#' + seccionActual) {
      enlace.classList.add('active');
    }
  });
});

// ─────────────────────────────────────────────
// 3. ANIMACIÓN DE ENTRADA 
// ─────────────────────────────────────────────

const tarjetas = document.querySelectorAll('.skill-card, .proyecto-card');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

tarjetas.forEach(tarjeta => {
  tarjeta.style.opacity = '0';
  tarjeta.style.transform = 'translateY(20px)';
  tarjeta.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  observer.observe(tarjeta);
});

document.addEventListener('DOMContentLoaded', function () {
    // Inicializar AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Activar navegación móvil
    const navToggle = document.createElement('button');
    navToggle.classList.add('mobile-nav-toggle');
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(navToggle);

    navToggle.addEventListener('click', function () {
      document.body.classList.toggle('mobile-nav-active');
      this.classList.toggle('bi-x');
    });
  });
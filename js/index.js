// Animaciones y interactividad básica

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efecto hover para proyectos
    const proyectos = document.querySelectorAll('.proyecto');
    proyectos.forEach(proyecto => {
        proyecto.addEventListener('mouseenter', () => {
            proyecto.style.transform = 'scale(1.05)';
            proyecto.style.transition = 'transform 0.3s ease';
        });

        proyecto.addEventListener('mouseleave', () => {
            proyecto.style.transform = 'scale(1)';
        });
    });

    // Animación de entrada para secciones
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Opcional: Validación de formulario de contacto
function validarFormulario() {
    // Añade aquí lógica de validación de formulario
}
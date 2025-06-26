// Navigation functionality
const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("nav-menu");
const mobileToggle = document.getElementById("mobile-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const scrollTopBtn = document.getElementById("scrollTop");

// Mobile menu toggle
mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  const icon = mobileToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const icon = mobileToggle.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
    scrollTopBtn.style.opacity = "1";
    scrollTopBtn.style.transform = "translateY(0)";
  } else {
    navbar.classList.remove("scrolled");
    scrollTopBtn.style.opacity = "0";
    scrollTopBtn.style.transform = "translateY(100px)";
  }
});

// Scroll to top functionality
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Active navigation link
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-on-scroll");
    }
  });
}, observerOptions);

// Observe all sections and cards
document
  .querySelectorAll(
    "section, .project-card, .skill-category, .about-grid > div"
  )
  .forEach((el) => {
    observer.observe(el);
  });

// Skill bars animation
const skillBars = document.querySelectorAll(".skill-item");
skillBars.forEach((bar, index) => {
  setTimeout(() => {
    bar.style.transform = "translateX(0)";
    bar.style.opacity = "1";
  }, index * 100);
});

// Project cards hover effect
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// Typing effect for hero subtitle
const subtitle = document.querySelector(".hero-subtitle");
const text = subtitle.textContent;
subtitle.textContent = "";

let i = 0;
const typeWriter = () => {
  if (i < text.length) {
    subtitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
};

// Start typing effect after page loads
window.addEventListener("load", () => {
  setTimeout(typeWriter, 1000);
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

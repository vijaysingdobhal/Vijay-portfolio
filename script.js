document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  function setupTypingEffect(selector, stringsArray) {
    const element = document.querySelector(selector);
    if (element) {
      new Typed(selector, {
        strings: stringsArray,
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
        smartBackspace: true,
      });
    }
  }

  setupTypingEffect(".nav-typing-effect", ["Welcome...", "Hello!", "नमस्ते!", "Vijaysing Dobhal"]);
  setupTypingEffect(".typing-text", ["Flutter Developer", "Mobile App Enthusiast", "Problem Solver"]);

  VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
    perspective: 1000,
  });

  const animatedItems = document.querySelectorAll(".animated-section, .animated-item");
  const animationOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  const animationObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, animationOptions);
  animatedItems.forEach(item => animationObserver.observe(item));

  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  window.addEventListener('mousemove', function(e) {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
  });

  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);
  faders.forEach(fader => appearOnScroll.observe(fader));
    
  const yearSpan = document.getElementById('current-year');
  if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function applyTheme(theme) {
  body.setAttribute('data-theme', theme);
  themeToggle.checked = theme === 'light';
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('change', () => {
  const newTheme = themeToggle.checked ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Fade-in animation on scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const options = { threshold: 0.3 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));
});

// Parallax scroll effect
window.addEventListener('scroll', () => {
  document.querySelectorAll('.parallax').forEach(bg => {
    const offset = window.pageYOffset * 0.5;
    bg.style.backgroundPositionY = `${offset}px`;
  });
});

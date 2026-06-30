const heroImage = document.querySelector('.hero-image');
const links = document.querySelectorAll('.top-nav a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const newImage = e.target.getAttribute('data-image');
    heroImage.classList.add('fade-out');
    setTimeout(() => {
      heroImage.src = `assets/images/${newImage}`;
      heroImage.classList.remove('fade-out');
      heroImage.classList.add('fade-in');
      setTimeout(() => heroImage.classList.remove('fade-in'), 800);
    }, 400);
  });
});

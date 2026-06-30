const hero = document.getElementById('hero');
const links = document.querySelectorAll('.top-nav a');

links.forEach(link => {
  link.addEventListener('click', () => {
    const img = link.getAttribute('data-image');

    // Fade-out with blur + zoom
    hero.classList.add('fade-out');

    setTimeout(() => {
      // Swap background
      hero.style.backgroundImage = `url('${img}')`;

      // Fade-in with cinematic effects
      hero.classList.remove('fade-out');
      hero.classList.add('fade-in');

      setTimeout(() => {
        hero.classList.remove('fade-in');
      }, 600);
    }, 600);
  });
});

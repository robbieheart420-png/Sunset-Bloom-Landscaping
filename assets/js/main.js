const hero = document.querySelector('.hero');
const links = document.querySelectorAll('.top-nav a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const newImage = e.target.getAttribute('data-image');
    hero.style.backgroundImage = `url('${newImage}')`;
  });
});

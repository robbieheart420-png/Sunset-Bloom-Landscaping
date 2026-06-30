// Select the hero section and navigation links
const hero = document.getElementById('hero');
const links = document.querySelectorAll('.top-nav a');

// Add click event to each navigation link
links.forEach(link => {
  link.addEventListener('click', () => {
    const img = link.getAttribute('data-image');

    // Add fade-out class
    hero.classList.add('fade-out');

    // Wait for fade-out to finish, then swap image
    setTimeout(() => {
      hero.style.backgroundImage = `url('${img}')`;

      // Fade back in
      hero.classList.remove('fade-out');
      hero.classList.add('fade-in');

      // Remove fade-in class after animation completes
      setTimeout(() => {
        hero.classList.remove('fade-in');
      }, 400);
    }, 400);
  });
});

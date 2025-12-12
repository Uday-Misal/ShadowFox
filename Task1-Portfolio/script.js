// Fade-in animation on scroll
const sections = document.querySelectorAll('.fade');

function handleScroll() {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('show');
    }
  });
}

window.addEventListener('scroll', handleScroll);
handleScroll();

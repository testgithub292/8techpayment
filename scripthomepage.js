const navbar = document.querySelector('.navbar');

// Listen for scroll event
window.addEventListener('scroll', function() {
  if (window.scrollY >= 470) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
  htmlElement.classList.toggle('dark');
  if (htmlElement.classList.contains('dark')) {
    document.body.classList.remove('bg-white', 'text-gray-800');
    document.body.classList.add('bg-gray-900', 'text-gray-200');
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
  } else {
    document.body.classList.remove('bg-gray-900', 'text-gray-200');
    document.body.classList.add('bg-white', 'text-gray-800');
    themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
  }
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.remove('opacity-0');
    scrollToTopBtn.classList.add('opacity-100');
  } else {
    scrollToTopBtn.classList.remove('opacity-100');
    scrollToTopBtn.classList.add('opacity-0');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Sticky Navbar Shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-lg', 'bg-gray-200');
  } else {
    navbar.classList.remove('shadow-lg', 'bg-gray-200');
    navbar.classList.add('bg-gray-100');
  }
});

// Animate Skills Cards on Scroll
const skillCards = document.querySelectorAll('.skill-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-10');
      entry.target.classList.add('opacity-100', 'translate-y-0');
      const progressBar = entry.target.querySelector('.progress');
      const progressValue = progressBar.getAttribute('data-progress');
      progressBar.style.width = `${progressValue}%`;
    }
  });
}, { threshold: 0.3 });

skillCards.forEach(card => {
  observer.observe(card);
});
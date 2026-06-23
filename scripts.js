// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Project filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');
const categories = document.querySelectorAll('.project-category');

function showAllCategories() {
  filterBtns.forEach(b => b.classList.remove('active'));
  categories.forEach(cat => cat.style.display = 'block');
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) {
      showAllCategories();
      return;
    }
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    categories.forEach(cat => {
      cat.style.display = cat.dataset.category === filter ? 'block' : 'none';
    });
  });
});

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card, .project-category, .exp-item, .about-content').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

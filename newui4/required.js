//NewUI 4 JavaScript file
//This is REQUIRED for NewUI 4 to work proporly

// DARK MODE TOGGLE
document.addEventListener('DOMContentLoaded', () => {
  const modeToggle = document.querySelector('.mode-toggle');
  const body = document.body;
  // Optional: Save theme preference in localStorage
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // Load or set initial mode
  if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark)) {
    body.classList.add('dark-mode');
    if (modeToggle) modeToggle.textContent = 'Light Mode';
  } else {
    body.classList.remove('dark-mode');
    if (modeToggle) modeToggle.textContent = 'Dark Mode';
  }

  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      modeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
});

// TEXT CAROUSEL
class TextCarousel {
  constructor(carouselSelector, carouselItems = []) {
    this.carousel = document.querySelector(carouselSelector);
    if (!this.carousel) return;
    this.items = carouselItems.length ? carouselItems : Array.from(this.carousel.querySelectorAll('.carousel-content span')).map(span => span.textContent);
    this.index = 0;
    this.contentElem = this.carousel.querySelector('.carousel-content');
    this.prevBtn = this.carousel.querySelector('.carousel-button.prev');
    this.nextBtn = this.carousel.querySelector('.carousel-button.next');
    this.render();

    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.go(-1));
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.go(1));
  }

  go(direction) {
    this.index = (this.index + direction + this.items.length) % this.items.length;
    this.render();
  }

  render() {
    if (this.contentElem) this.contentElem.textContent = this.items[this.index];
  }
}

// Example usage:
// HTML structure:
// <div class="text-carousel">
//   <button class="carousel-button prev">Prev</button>
//   <div class="carousel-content"></div>
//   <button class="carousel-button next">Next</button>
// </div>
// JS initialization:
document.addEventListener('DOMContentLoaded', () => {
  // Option 1: Provide your carousel items in JS
  const messages = [
    "Welcome to the blue-green glassy site!",
    "Try toggling light/dark mode in the navbar.",
    "Hover over cards to see them pop out.",
    "Responsive design for every device.",
    "Check out the infobox on the right!"
  ];
  new TextCarousel('.text-carousel', messages);

  // Option 2: If your HTML already has <span> elements inside .carousel-content, you can omit the messages array
  // new TextCarousel('.text-carousel');
});

//NewUI 4 JavaScript file
//This is REQUIRED for NewUI 4 to work proporly

// DARK MODE TOGGLE
document.addEventListener('DOMContentLoaded', () => {
  const modeToggle = document.querySelector('.mode-toggle');
  const body = document.body;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  function setMode(isDark) {
    if(isDark) {
      body.classList.add('dark-mode');
      modeToggle.textContent = 'Light Mode';
    } else {
      body.classList.remove('dark-mode');
      modeToggle.textContent = 'Dark Mode';
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  // Initial load
  const savedMode = localStorage.getItem('theme');
  setMode(savedMode === 'dark' || (!savedMode && prefersDark));
  // Toggle
  modeToggle.addEventListener('click', () => {
    setMode(!body.classList.contains('dark-mode'));
  });
});

// TEXT CAROUSEL
document.addEventListener('DOMContentLoaded', () => {
  const messages = [
    "Welcome to the blue-green glassy site!",
    "Try toggling light/dark mode in the navbar.",
    "Hover over cards to see them pop out.",
    "Responsive design for every device.",
    "Check out the infobox on the right!"
  ];
  let index = 0;
  const contentElem = document.querySelector('.text-carousel .carousel-content');
  const prevBtn = document.querySelector('.text-carousel .carousel-button.prev');
  const nextBtn = document.querySelector('.text-carousel .carousel-button.next');
  
  function showMessage(i) {
    contentElem.textContent = messages[i];
  }
  showMessage(index);
  prevBtn.addEventListener('click', () => {
    index = (index - 1 + messages.length) % messages.length;
    showMessage(index);
  });
  nextBtn.addEventListener('click', () => {
    index = (index + 1) % messages.length;
    showMessage(index);
  });
});

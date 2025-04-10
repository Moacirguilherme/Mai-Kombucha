const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalImages = images.length;

function getImagesPerSlide() {
  return window.innerWidth <= 768 ? 1 : 3;
}

function updateCarousel() {
  const imagesPerSlide = getImagesPerSlide();
  const slideWidth = 100 / imagesPerSlide;
  track.style.transform = `translateX(-${currentIndex * slideWidth}vw)`;
}

nextBtn.addEventListener('click', () => {
  const imagesPerSlide = getImagesPerSlide();
  if (currentIndex < totalImages - imagesPerSlide) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

setInterval(() => {
  const imagesPerSlide = getImagesPerSlide();
  if (currentIndex < totalImages - imagesPerSlide) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}, 3000);

// Atualiza ao redimensionar a tela
window.addEventListener('resize', updateCarousel);

// Garante a posição inicial correta
updateCarousel();

const toggle = document.querySelector('.menu-toggle');
const header = document.querySelector('header');

toggle.addEventListener('click', () => {
  header.classList.toggle('menu-open');
});
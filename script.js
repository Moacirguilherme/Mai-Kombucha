const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalImages = images.length;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * (100 / 3)}vw)`; // 👈 Ajustado para 3 imagens por vez
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalImages - 3) {
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
  if (currentIndex < totalImages - 3) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}, 3000);
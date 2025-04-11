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

const section = document.querySelector('.kombucha-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // opcional, para animar só 1 vez
    }
  });
}, {
  threshold: 0.2 // quando 20% da section estiver visível
});

observer.observe(section);
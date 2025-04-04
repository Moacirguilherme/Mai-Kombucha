const track = document.querySelector('.carousel-track');
  const images = document.querySelectorAll('.carousel-track img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let currentIndex = 0;
  const totalImages = images.length;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
  });

  // Auto play
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  }, 3000); // troca a cada 3 segundos
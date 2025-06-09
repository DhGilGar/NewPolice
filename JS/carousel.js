
  const slides = document.querySelectorAll('.carousel-slide');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
    resetInterval();
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
    resetInterval();
  }

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
  }

  // Auto-advance
  slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);

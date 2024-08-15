let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const carouselNav = document.querySelector(".carousel-nav");
totalSlides = slides.length;

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("nav-dot");
  if (i === 0) {
    dot.classList.add("active");
  }
  carouselNav.appendChild(dot);
}

const dots = document.querySelectorAll(".nav-dot");

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  document.querySelector(".carousel-slides").style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
})

document.querySelector(".carousel-prev").addEventListener("click", prevSlide);
document.querySelector(".carousel-next").addEventListener("click", nextSlide);

setInterval(nextSlide, 5000);

showSlide(0);

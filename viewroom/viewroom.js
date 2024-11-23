let slideIndex = 1;
let slideInterval;

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (n) {
    slideIndex = n;
  } else {
    slideIndex++;
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

  slideInterval = setTimeout(showSlides, 4000);
}

function plusSlides(n) {
  clearTimeout(slideInterval);
  showSlides(slideIndex + n);
}

window.onload = function () {
  showSlides(slideIndex);
};

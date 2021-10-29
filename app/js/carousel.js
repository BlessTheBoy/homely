var slideIndex = 1;
showSlides(slideIndex);

let autoSwitch = setInterval(plusSlides, 4000, 1);

// Next/previous controls
function plusSlides(n) {
  // clearInterval(autoSwitch);
  showSlides((slideIndex += n));
  // autoSwitch = setInterval(plusSlides(1), 3000);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

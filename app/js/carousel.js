const slides = document.getElementsByClassName("mySlides");
const currentImg = document.getElementById("currentImg");
document.getElementById("totalImg").innerHTML = slides.length;
document.documentElement.style.setProperty(
  "--no-of-carousel-image",
  slides.length
);

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
  currentImg.innerHTML = slideIndex;
  document.documentElement.style.setProperty(
    "--current-carousel-image",
    slideIndex
  );
}

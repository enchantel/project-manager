var slideIndex = 1;
var carouselTimer;
var carouselInterval = 2000;
var interactionPause = 5000;
showDivs(slideIndex);
scheduleCarousel(carouselInterval);

function plusDivs(n) {
  clearTimeout(carouselTimer);
    showDivs(slideIndex += n);
  scheduleCarousel(interactionPause);
}

function showDivs(n) {
    var slides = document.getElementsByClassName("projects-slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("is-active");
    }

    slides[slideIndex - 1].classList.add("is-active");
}

function scheduleCarousel(delay) {
    carouselTimer = setTimeout(carousel, delay);
}

function carousel() {
    var slides = document.getElementsByClassName("projects-slide");
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    showDivs(slideIndex);
    scheduleCarousel(carouselInterval);
}
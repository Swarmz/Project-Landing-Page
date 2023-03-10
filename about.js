document.querySelectorAll('.a-header').forEach
    (link => {
        if(link.href === window.location.href){
            link.setAttribute('aria-current', 'page')
        }
    })

let slideIndex = 1;
    showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let textSlides = document.getElementsByClassName("text-slides");
    let slides = document.getElementsByClassName("img-slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        textSlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    textSlides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
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

// Toggle the dropdown content on click
function dropdownToggle() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Closes the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
})

/* Set the width of the sidebar (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "100vw";
    document.getElementById("hamburger").style.opacity = "0";
}
  
/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("hamburger").style.opacity = "1";
}
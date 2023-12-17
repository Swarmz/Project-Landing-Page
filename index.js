// Email copy 
function copyText() {
    const x = document.getElementById("myEmail");
    x.select();
    x.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(x.value);
}

// Underline current page in nav
document.querySelectorAll('.a-header').forEach
    (link => {
        if(link.href === window.location.href){
            link.setAttribute('aria-current', 'page')
        }
    })


var popup = document.getElementById('id01');
// When the user clicks anywhere outside of the popup, close it
window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
})

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


// When the user scrolls the page, execute myFunction
// window.onscroll = function() {stickyNav()}; // temp disable sticky header

// Get the header
// let header = document.getElementById("index-header");

// Get the offset position of the navbar
// let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyNav() {
//   if (window.scrollY > sticky) {
//     header.classList.add("sticky","shrink");
//   } else {
//     header.classList.remove("sticky","shrink");

//   }
// }

function splashScreen() {
    document.getElementById("welcome").classList.add("show");
}
// Once the window is loaded...
document.addEventListener("DOMContentLoaded", function(){

    // Check sessionStorage to see if the splash screen 
    // has NOT already been displayed
    if(!localStorage.getItem("language-check")){
 
      // Splash has not been displayed, so show it:
      splashScreen();
 
      // Store a value in sessionStorage to denote that the splash screen
      // has now been displayed
      localStorage.setItem("language-check", "true");
    
    } else closeAndStart();
 });

// Beginning animations for index
function closeAndStart() {
    document.getElementById('welcome').style.display='none';
    document.getElementById('quote-left').classList.add('slide-in');
    document.getElementById('quote-right').classList.add('slide-in');
    document.getElementById('quote-panel-container').classList.add('div-fade-in');
}


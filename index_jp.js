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


// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the header
// let header = document.getElementById("index-header");

// // Get the offset position of the navbar
// let sticky = header.offsetTop;

/////////////////////// TEMP REMOVAL ////////////////////////////
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.scrollY > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


// // Beginning animations for index
// function closeAndStart() {
//     document.getElementById('welcome').style.display='none';
//     document.getElementById('quote-left').classList.add('slide-in');
//     document.getElementById('quote-right').classList.add('slide-in');
//     document.getElementById('quote-panel-container').classList.add('div-fade-in');
// }

// // Japanese page doesn't have the onclick to fire closeAndStart function
// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById('quote-left').classList.add('slide-in');
//     document.getElementById('quote-right').classList.add('slide-in');
//     document.getElementById('quote-panel-container').classList.add('div-fade-in');
//   });
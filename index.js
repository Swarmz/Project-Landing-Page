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
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

// Toggle the dropdown content on click
function dropdownToggle() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Closes the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
}
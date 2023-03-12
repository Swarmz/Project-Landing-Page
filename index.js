function copyText() {
    const x = document.getElementById("myEmail");
    x.select();
    x.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(x.value);
}


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


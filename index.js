function copyText() {
    const x = document.getElementById("myEmail");
    x.select();
    x.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(x.value);
    }

function emailReveal() {
    const x = document.getElementById("myEmail");
    x.outerHTML =
        '<div class="copy-link">'+ 
            '<input type="text" id="myEmail" class="copy-link-input" value="gavinsutton6511@gmail.com" readonly>' +
            '<button type="button" class="copy-link-button" onclick="copyText()">' +
                '<span class="material-icons">content_copy</span>'+
            '</button>'
        '</div>';
    
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


const emailButton = document.getElementById("modal-button");
emailButton.addEventListener("click", function() {emailReveal()}, {once : true});
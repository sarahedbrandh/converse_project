
var modal = document.getElementById('myModal');


var openContact = document.getElementById("menuClick");


var span = document.getElementsByClassName("close")[0];

openContact.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
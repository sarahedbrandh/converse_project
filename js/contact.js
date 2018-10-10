//TODO: showContact()       visa contact. visability: visable
//TODO: closeContact()      dölj contact. visability: none

//TODO: sendToContact()     mejla innehållet från formuläret + showThanks()
//TODO: showThanks()        visa tackmeddelande efter man skickat till contact


/* DO MIA PLS!!
0, make fake bg to test box over [x]
1, javascript till modal box som fungerar []
1.5, thank you pop-up after oncklick send []
2, link modal box to menu ID []
3, do form in modal content []
4, conect form to e-mail []
5, css style modal box []
6, quality check []
6.5, remove fake bg!!! []
7, show group and publish to master []
*/


var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("menuClick");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
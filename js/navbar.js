function navToggle() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " dropped";
    } else {
        x.className = "topnav";
    }
}



//
//TODO: menuClick(event) -> dölja alla sectioner .section-content  (hideContent())
//                       -> visa innehåll för aktuell .section-content #content-?   (showContent(event))

//TODO: hideContent()         hämta alla divar och sätt dem till hidden
//TODO: showContent(event)    visability: visable  hämta div med motsvarande id och gör den visable

//TODO: enlargeLogo() när man hovrar över logan så ska loggan bli större


//TODO: make background <-> transparent white when click on navbar




// ===============  Changing the navbar-background to white when clicking ============== S//

var menuItems = document.querySelectorAll(".menu-items");

menuItems.forEach(function(item){
    item.addEventListener('click', changeNav, false);
    console.log(item);
});

function changeNav(event) {
    var topNav = document.querySelector(".topnav");
    console.log(event.target.id);
    topNav.style.backgroundColor = "white";
}


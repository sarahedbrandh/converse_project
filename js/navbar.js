function navToggle() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " dropped";
    } else {
        x.className = "topnav";
    }
}

//TODO: menuClick(event) -> dölja alla sectioner .section-content  (hideContent())
//                       -> visa innehåll för aktuell .section-content #content-?   (showContent(event))

    var menuItems = document.querySelectorAll('.menu-items');
    console.log(menuItems);
    menuItems.forEach(function(item){
        console.log("testin");
    });
    console.log('test');




 //har valt menyalternativen

// STEG 2 Om man klickar visa den item 

// steg 3 Dölj nuvarande sektion 

function menuClick(EventTarget){
    document.querySelectorAll('.section-content').forEach(function(content) {
        content.style.visibility = "hidden" ;

        }
        )
}



//TODO: hideContent()         hämta alla divar och sätt dem till hidden
//TODO: showContent(event)    visability: visable  hämta div med motsvarande id och gör den visable

//TODO: enlargeLogo() när man hovrar över logan så ska loggan bli större
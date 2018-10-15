function navToggle() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " dropped";
    } else {
        x.className = "topnav";
    }
}


<<<<<<< HEAD
    var menuItems = document.querySelectorAll('.menu-items');
    menuItems.forEach(function(item){
        
        
    });
    



 //har valt menyalternativen

// STEG 2 Om man klickar visa den item 

// steg 3 Dölj nuvarande sektion 

function menuClick(EventTarget){
    document.querySelectorAll('.section-content'). 
        content.style.visibility = "hidden" ;addEventListener('click' () => {
        console.log('pressed');
        
        })



=======

//
//TODO: menuClick(event) -> dölja alla sectioner .section-content  (hideContent())
//                       -> visa innehåll för aktuell .section-content #content-?   (showContent(event))
>>>>>>> master

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
    removeHeaderImg();
    
}


// =============== Function for sliding up the header -background image ======== S//
function removeHeaderImg(){
    var headerImg = document.querySelector("#header-img");
    console.log(headerImg);
    headerImg.style.top = "-100vh";


    //det här ska ju egentligen vara content-wrappern som flyttar sig. inget annat
    var contentwrapper = document.querySelector("#content-wrapper");
    var vendorListWrapper = document.querySelector("#vendor-list-wrapper"); //den här för att den är absolute
    contentwrapper.style.top = "0px";
    vendorListWrapper.style.top = "calc(100vh - 80px)";

  
}

 //ta bort när du redigerat färdigt contentsidorsna

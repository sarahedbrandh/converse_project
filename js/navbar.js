function navToggle() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.classList.add("dropped");
    } else {
        x.classList.remove("dropped");
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
    console.log(item.id);
    if (item.id != "menu-icon"){
        item.addEventListener('click', changeNav, false);
    console.log(item);
    item.addEventListener('click', changeContent, false);
    }
    
});

function changeNav(event) {
    var topNav = document.querySelector(".topnav");
    console.log(event.target.id);
    topNav.style.backgroundColor = "white";
    removeHeaderImg();
    var topNav = document.querySelector("#myTopnav");
    topNav.classList.remove("dropped");
    //remove classList dropped to #MyTopNav
    
}

function changeContent(event) {
    var getAllContent = document.querySelectorAll('.section-content');
    getAllContent.forEach(function (item){ 
        item.classList.add('hidden');
    });
    var menuId = event.target.id;
    console.log(menuId);
    var addElement = document.querySelector('#content-' + menuId);
    addElement.classList.remove('hidden');
    

}


// =============== Function for sliding up the header -background image ======== S//
function removeHeaderImg(){
    var headerImg = document.querySelector("#header-img");
    console.log(headerImg);
    headerImg.style.top = "-100vh";


    
    var contentwrapper = document.querySelector("#content-wrapper");
    var vendorListWrapper = document.querySelector("#vendor-list-wrapper"); //den här för att den är absolute
    contentwrapper.style.top = "0px";
    vendorListWrapper.style.top = "calc(100vh - 80px)";

  
}



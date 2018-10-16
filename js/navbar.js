function navToggle() {
    var x = document.getElementById("myTopnav");
    if (!x.classList.contains("dropped")) {
        x.classList.add("dropped");
    } else {
        x.classList.remove("dropped");
    }
}






// ===============  Changing the navbar-background to white when clicking ============== Sara//

var menuItems = document.querySelectorAll(".menu-items");

menuItems.forEach(function(item){
    console.log(item.id);
    if (item.id != "menu-icon"){
        if (item.id != "menuClick"){
        item.addEventListener('click', changeNav, false);
        item.addEventListener('click', changeContent, false);
        console.log('hello');
        }
    }
    
});

function changeNav(event) {
    var topNav = document.querySelector(".topnav");
    topNav.classList.add("clicked");
    console.log("classList" + topNav.classList);
    
    topNav.style.backgroundColor = "white";
    //for all menu items change color to black
    menuItems.forEach(function(item){
        item.style.color = "black";
    })
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
    slideUpContent();
}

function slideUpContent(){
    var contentwrapper = document.querySelector("#content-wrapper");
    var vendorListWrapper = document.querySelector("#vendor-list-wrapper"); 
    contentwrapper.style.top = "0px";
    vendorListWrapper.style.top = "calc(100vh - 80px)";

    //sätt allt annat innehåll till left 100vw
}



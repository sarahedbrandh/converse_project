// TODO: Ad google map with markers.
// TODO: Show vendors() Lista slide up.
var showVendorsHeader = document.querySelector("#vendor-list-header");
var vendorElement = document.querySelector("#vendor-list-wrapper");
var vendorList = document.querySelector("#vendor-list-vendors");

showVendorsHeader.addEventListener('click', changeText, false);
showVendorsHeader.addEventListener('click', showVendors, false);


function changeText(event) {
    var vendorListTitle = document.querySelector("#vendor-list-title");
  

    if(vendorListTitle.className == 'hidden-list') {
        vendorListTitle.innerHTML = "Hide Vendors";
        console.log("classnamnet är hidden-list");
        vendorListTitle.className = "visiblie-list";
    } else {
        vendorListTitle.innerHTML = "Show Vendors";
        console.log("classnamnet är visibli-list");
        vendorListTitle.className = "hidden-list";
    }

}

function showVendors(){ 
    vendorElement.style.top = "500px"; //TODO: calc hur långt upp ska den
    
    showVendorsHeader.removeEventListener('click', showVendors, false);
    showVendorsHeader.addEventListener('click', hideVendors, false);
    
    
}

function hideVendors() {
    
    showVendorsHeader.removeEventListener('click', hideVendors, false);
    showVendorsHeader.addEventListener('click', showVendors, false);
    vendorElement.style.top = "calc(100% - 100px)";
    vendorList.style.overflow = "hidden";
}

//TODO: change Text in hide Vendors and show Vendors



// WANT TODO: Style map.
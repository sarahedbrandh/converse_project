// TODO: Ad google map with markers.
// TODO: Show vendors() Lista slide up.
var vendorListHeader = document.querySelector("#vendor-list-header");
var vendorElement = document.querySelector("#vendor-list-wrapper");
var vendorList = document.querySelector("#vendor-list-vendors");


vendorListHeader.addEventListener('click', showVendors, false);


function changeVendorHeader() {
    var vendorListTitle = document.querySelector("#vendor-list-title");
    var icon = vendorListHeader.querySelector("i");
  
    if(vendorListHeader.className == 'hidden-list') {
        vendorListTitle.innerHTML = "Hide Vendors";
        console.log("classnamnet är hidden-list");
        vendorListHeader.className = "visible-list";
        icon.className = "fas fa-angle-down";
    } else {
        vendorListTitle.innerHTML = "Show Vendors";
        console.log("classnamnet är visibli-list");
        vendorListHeader.className = "hidden-list";
        icon.className = "fas fa-angle-up";
    }
  
}

function showVendors(){ 
    vendorElement.style.top = "500px"; //TODO: calc hur långt upp ska den
    changeVendorHeader();
    vendorListHeader.removeEventListener('click', showVendors, false);
    vendorListHeader.addEventListener('click', hideVendors, false);
    
    
}

function hideVendors() {
    
    vendorListHeader.removeEventListener('click', hideVendors, false);
    vendorListHeader.addEventListener('click', showVendors, false);
    vendorElement.style.top = "calc(100% - 100px)";
    vendorList.style.overflow = "hidden";
    changeVendorHeader();
}

//TODO: change Text in hide Vendors and show Vendors



// WANT TODO: Style map.
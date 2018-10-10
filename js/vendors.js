// TODO: Ad google map with markers.
// TODO: Show vendors() Lista slide up.
var showVendorsText = document.querySelector("#vendor-list-title");
var vendorElement = document.querySelector("#vendor-list-wrapper");
var vendorList = document.querySelector("#vendor-list-vendors");

showVendorsText.addEventListener('click', showVendors, false);



function showVendors(){ 
    vendorElement.style.top = "500px"; //TODO: calc hur långt upp ska den
    
    showVendorsText.removeEventListener('click', showVendors, false);
    showVendorsText.addEventListener('click', hideVendors, false);
    
}

function hideVendors() {
    
    showVendorsText.removeEventListener('click', hideVendors, false);
    showVendorsText.addEventListener('click', showVendors, false);
    vendorElement.style.top = "calc(100% - 100px)";
    vendorList.style.overflow = "hidden";
}





// WANT TODO: Style map.
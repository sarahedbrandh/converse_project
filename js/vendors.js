// TODO: Ad google map with markers.
// TODO: Show vendors() Lista slide up.
var showVendorsText = document.querySelector("#vendor-list-title");
var vendorElement = document.querySelector("#vendor-list-wrapper");

showVendorsText.addEventListener('click', showVendors, false);



function showVendors(){ 
    vendorElement.style.top = "100px";
    showVendorsText.removeEventListener('click', showVendors, false);
    showVendorsText.addEventListener('click', hideVendors, false);
    
}

function hideVendors() {
    
    showVendorsText.removeEventListener('click', hideVendors, false);
    showVendorsText.addEventListener('click', showVendors, false);
    vendorElement.style.top = "calc(100% - 100px)";
}





// WANT TODO: Style map.
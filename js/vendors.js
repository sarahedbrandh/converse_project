// TODO: Ad google map with markers.
// TODO: Show vendors() Lista slide up.
var vendorListHeader = document.querySelector("#vendor-list-header");
var vendorElement = document.querySelector("#vendor-list-wrapper");
var vendorList = document.querySelector("#vendor-list-vendors");


vendorListHeader.addEventListener('click', showVendors, false);
var heightVendorWrapper = vendorElement.offsetHeight;
    console.log("höjden på wrappern är" + heightVendorWrapper);

function changeVendorHeader() {
    var vendorListTitle = document.querySelector("#vendor-list-title");
    var icon = vendorListHeader.querySelector("i");
  
    if(vendorListHeader.className == 'hidden-list') {
        vendorListTitle.innerHTML = "Close List";
        console.log("classnamnet är hidden-list");
        vendorListHeader.className = "visible-list";
        icon.className = "fas fa-angle-down";
    } else {
        vendorListTitle.innerHTML = "Show List";
        console.log("classnamnet är visibli-list");
        vendorListHeader.className = "hidden-list";
        icon.className = "fas fa-angle-up";
    }
  
}

function showVendors(){ 
    var fromTheTop = window.innerHeight - heightVendorWrapper;
    vendorElement.style.top = "30vh"; 
    
    changeVendorHeader();
    vendorListHeader.removeEventListener('click', showVendors, false);
    vendorListHeader.addEventListener('click', hideVendors, false);
    
    
}

function hideVendors() {
    
    vendorListHeader.removeEventListener('click', hideVendors, false);
    vendorListHeader.addEventListener('click', showVendors, false);
    vendorElement.style.top = "calc(100% - 80px)"; //ändra stylen/positionen på content-listen
    
    changeVendorHeader();
}

//TODO: change Text in hide Vendors and show Vendors



// WANT TODO: Style map.
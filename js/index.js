let sidebar = document.querySelector("#css-zen-garden > div.page-wrapper > aside.sidebar");
function toggleSidebar(event) {
    let w = window.innerWidth;
    let h = window.innerHeight;
    let cX = event.clientX;
    let cY = event.clientY

    if(document.body.style.overflowY == "hidden") {
        if((cX < w - 40 && cX > (w - (40 + 50))) && (cY > 20 && (cY < (20 + 27)))) {
            sidebar.style.cssText = `display: none`;
            document.body.style.overflowY = "unset";
        }
    }
    else {
        if((cX < w - 40 && cX > (w - (40 + 50))) && (cY > 20 && (cY < (20 + 27)))) {
            sidebar.style.cssText = `display: revert; 
                                        position: absolute; 
                                        top: 0;
                                        right: 0;
                                        width: 100%;
                                        height: 100%;
                                        margin: 0;
                                        z-index: 2;`;
            document.body.style.overflowY = "hidden";
        }
    }
    
}

document.addEventListener("click", toggleSidebar);
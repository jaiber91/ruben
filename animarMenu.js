let menu= document.querySelectorAll(".menu")

function mostrarMenu() {
    let scrollTop=document.documentElement.scrollTop;
    for (let i = 0; i < menu.length; i++) {
        
        let alturaMenu= menu[i].offsetTop
        if (alturaMenu < scrollTop) {
            menu[i].style.opacity = 1
           
        }
        
    }
}
window.addEventListener("scroll", mostrarMenu )
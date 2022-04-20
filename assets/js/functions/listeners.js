var nav = document.querySelector('nav.header-left')
var iconNav = document.querySelector('.header-top-left .header-icon')
var listes = document.querySelectorAll('.header-left ul li')
var prev = document.getElementById("prev")
var next = document.getElementById("next")

/**
 * Objet contenant les gestionnaires d'évènements
 */
var listenerFunctions = {
    openNav: ()=>{
        nav.style.display = "block"
    },
    closeNav: ()=>{
        nav.style.display = "none"
    }, 
    nextSlide: () =>{
        let index = slideIndex +1
        showSlide(index)
    },
    prevSlide: () => {
        let index = slideIndex -1
        showSlide(index)
    }
}

/**
 * Fonction qui réalise les abonnements
 */
var setupListeners = () =>{
    iconNav.onmouseover = listenerFunctions.openNav
    nav.onmouseleave = listenerFunctions.closeNav
    prev.onclick = listenerFunctions.prevSlide
    next.onclick = listenerFunctions.nextSlide
    for (let index = 0; index < listes.length; index++) {
        const li = listes[index];
        li.onclick = listenerFunctions.closeNav
    }
}
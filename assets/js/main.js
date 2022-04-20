window.onload = () =>{
    /*var nav = document.getElementById('menu')
    var nav = document.getElementsByClassName('header-left')[0]*/
    var nav = document.querySelector('nav.header-left')
    nav.style.display = "none"
    setupListeners();
    initSlider();
}
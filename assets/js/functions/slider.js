var slideIndex= 0
var slides = document.querySelectorAll('.slide');

const TIME = 4000;


var  hideSlide = () =>{
    displayDot(slides)
    for (let index = 1; index < slides.length; index++) {
        const slide = slides[index];
        slide.style.display = "none"
    }
}

var initSlider = () =>{
    hideSlide()
}

var displayDot = (sliders) =>{
    for (let index = 0; index < sliders.length; index++) {
        const slide = sliders[index];
        var span = document.createElement("span")
        span.onclick = () => showSlide(index)
        //span.className= "dot"
        span.setAttribute('class','dot')
        if(index === 0){
            span.classList.add("active")
        }
        document.getElementById('dots').appendChild(span)
    }
}

var showSlide = (index) =>{
    
    if(typeof(index) !== "number"){
        return
    }

    let lastSlideIndex = slideIndex

    index %= slides.length

    index < 0 ? index += 5 : null
    
    slideIndex = index

    // Cacher l'ancien slide
    slides[lastSlideIndex].style.display = "none"

    // Affichage du slide correspondant à l'indice reçu en paramètre
    slides[slideIndex].style.display = "block"

    setActiveSlide(lastSlideIndex, slideIndex)

}

var changeSlide = () =>{
    var index = slideIndex +1
    showSlide(index)
}

var setActiveSlide = (lastIndex, currentIndex) =>{
    var spans = document.querySelectorAll(".dots span");
    spans[lastIndex] ? spans[lastIndex].classList.remove("active") : null
    spans[currentIndex] ? spans[currentIndex].classList.add("active") : null
}


var intervalID = setInterval(changeSlide,TIME);
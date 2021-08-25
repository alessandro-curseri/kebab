$(document).ready(function(){
    $("#urlmenuHr").click(function (){
        $('html, body').animate({
            scrollTop: $("#menu").offset().top 
        }, 1000);
    });
    $("#urlgalleryHr").click(function (){
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top 
        }, 1000);
    });
    $("#urlabout-usHr").click(function (){
        $('html, body').animate({
            scrollTop: $("#about-us").offset().top 
        }, 1000);
    });
    $("#urllocationHr").click(function (){
        $('html, body').animate({
            scrollTop: $("#location").offset().top 
        }, 1000);
    });
    $("#urlcontact-timeHr1").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact-time").offset().top 
        }, 1000);
    });
    $("#urlcontact-timeHr2").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact-time").offset().top 
        }, 1000);
    });
});
var kebab = document.getElementById("kebab")
var kebabHr = document.getElementById("kebabHr")
var kebabMenu = document.getElementById("kebabMenu")

var pizza = document.getElementById("pizza")
var pizzaHr = document.getElementById("pizzaHr")
var pizzaMenu = document.getElementById("pizzaMenu")

var rotolo = document.getElementById("rotolo")
var rotoloHr = document.getElementById("rotoloHr")
var rotoloMenu = document.getElementById("rotoloMenu")

var falafel = document.getElementById("falafel")
var falafelHr = document.getElementById("falafelHr")
var falafelMenu = document.getElementById("falafelMenu")
kebab.addEventListener("click", (ev) => {
  falafelHr.classList.add("hidden")
  rotoloHr.classList.add("hidden")
  pizzaHr.classList.add("hidden")
  kebabHr.classList.remove("hidden")
  falafelMenu.classList.add("hidden")
  rotoloMenu.classList.add("hidden")
  pizzaMenu.classList.add("hidden")
  kebabMenu.classList.remove("hidden")
})
pizza.addEventListener("click", (ev) => {
  falafelHr.classList.add("hidden")
  rotoloHr.classList.add("hidden")
  kebabHr.classList.add("hidden")
  pizzaHr.classList.remove("hidden")
  falafelMenu.classList.add("hidden")
  rotoloMenu.classList.add("hidden")
  kebabMenu.classList.add("hidden")
  pizzaMenu.classList.remove("hidden")
})
rotolo.addEventListener("click", (ev) => {
  falafelHr.classList.add("hidden")
  kebabHr.classList.add("hidden")
  pizzaHr.classList.add("hidden")
  rotoloHr.classList.remove("hidden")
  falafelMenu.classList.add("hidden")
  kebabMenu.classList.add("hidden")
  pizzaMenu.classList.add("hidden")
  rotoloMenu.classList.remove("hidden")
})
falafel.addEventListener("click", (ev) => {
  kebabHr.classList.add("hidden")
  pizzaHr.classList.add("hidden")
  rotoloHr.classList.add("hidden")
  falafelHr.classList.remove("hidden")
  kebabMenu.classList.add("hidden")
  pizzaMenu.classList.add("hidden")
  rotoloMenu.classList.add("hidden")
  falafelMenu.classList.remove("hidden")
})

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlidesGal(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlideGal(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 
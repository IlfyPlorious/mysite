var slideIndex = [0,0];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2"];
var dotsId = ["dot1", "dot2"];

//showSlides(1, 0);
//showSlides(1, 1);

automatic1();
automatic0();

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
    showSlides(slideIndex[no] = n, no);
  }

function showSlides(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(dotsId[no]);

  if (n > slides.length) {slideIndex[no] = 1}

  if (n < 1) {slideIndex[no] = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex[no]-1].style.display = "block";
  dots[slideIndex[no]-1].className += " active";

}

function automatic1(){

    var i;
    var slides = document.getElementsByClassName(slideId[1]);
    var dots = document.getElementsByClassName(dotsId[1]);
   
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideIndex[1]++;

    if (slideIndex[1] > slides.length) {slideIndex[1] = 1}

    slides[slideIndex[1]-1].style.display = "block";
    dots[slideIndex[1]-1].className += " active";

    setTimeout(automatic1, 5000);
}

function automatic0(){

    var i;
    var slides = document.getElementsByClassName(slideId[0]);
    var dots = document.getElementsByClassName(dotsId[0]);
   
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slideIndex[0]++;

    if (slideIndex[0] > slides.length) {slideIndex[0] = 1}

    slides[slideIndex[0]-1].style.display = "block";
    dots[slideIndex[0]-1].className += " active";

    setTimeout(automatic0, 4000);
}
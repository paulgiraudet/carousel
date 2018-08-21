var slider=["img1","img2","img3","img4","img5"];

var i=-1;

function showSlides() {

  var id=setTimeout(showSlides, 2500); // Change image every 2.5 seconds

    i++;
    // var dots = document.getElementsByClassName("dot");

    document.getElementById("slider_container").style.backgroundImage="url('img/"+slider[i]+".jpeg')";
    document.getElementById("numbertext").innerHTML=(i+1)+"/"+slider.length;

    // for (j = 0; j < dots.length; j++) {
    //   dots[j].className = dots[j].className.replace(" active", "");
    // }
    //
    // dots[i].className += " active";

    if ((i+1) >= [slider.length]) {i = -1}

}

showSlides();

// Next/previous controls
function controls(n) {
  i+=(n);
  if (i >= [slider.length]) {i = 0}
  if (i<0){i=(slider.length-1);}

  document.getElementById("slider_container").style.backgroundImage="url('img/"+slider[i]+".jpeg')";
  document.getElementById("numbertext").innerHTML=(i+1)+"/"+slider.length;

}

// dots image controls
// function currentSlide(n) {
//   i=n;
//   document.getElementById("slider_container").style.backgroundImage="url('img/"+slider[i]+".jpeg')";
//   document.getElementById("numbertext").innerHTML=(i+1)+"/"+slider.length;
//
//   dots[i].className += " active";
//
// }

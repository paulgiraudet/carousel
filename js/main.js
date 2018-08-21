var slider=["img1","img2","img3","img4","img5"];

var i=-1;
var dots = document.getElementsByClassName("dot");
var id=0;


//automatic slide function
function showSlides() {

    id=setTimeout(showSlides, 2500); // Change image every 2.5 seconds

    if ((i+1) >= [slider.length]) {i = -1} //from last to first slide

    i++;

    //changing background image of unique div
    document.getElementById("slider_container").style.backgroundImage="url('img/"+slider[i]+".jpeg')";
    document.getElementById("numbertext").innerHTML=(i+1)+"/"+slider.length;

    //cleaning all active
    for (j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active", "");
    }

    //show actual slide
    dots[i].className += " active";


}

// Next/previous controls
function controls(n) {

  //reseting timer
  clearTimeout(id);

  //changing actual slide indicator
  dots[i].className = dots[i].className.replace(" active", "");

  i+=(n);
  if (i >= [slider.length]) {i = 0}
  if (i<0){i=(slider.length-1);}

  document.getElementById("slider_container").style.backgroundImage="url('img/"+slider[i]+".jpeg')";
  document.getElementById("numbertext").innerHTML=(i+1)+"/"+slider.length;

  dots[i].className += " active";

  //restarting timer
  id=setTimeout(showSlides, 2500); // Change image every 2.5 seconds

}

// dots image controls
function currentSlide(n) {

  clearTimeout(id);

  dots[i].className = dots[i].className.replace(" active", "");

  i=n;
  document.getElementById("slider_container").style.backgroundImage="url('img/"+slider[i]+".jpeg')";
  document.getElementById("numbertext").innerHTML=(i+1)+"/"+slider.length;

  dots[i].className += " active";

  id=setTimeout(showSlides, 2500); // Change image every 2.5 seconds

}


//starting function
showSlides();

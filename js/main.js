var slider=["img1","img2","img3","img4","img5"];

var i=0;

function showSlides() {


    document.getElementById("slider_container").style.backgroundImage="url('img/"+slider[i]+".jpeg')";
    document.getElementById("numbertext").innerHTML=(i+1)+"/"+slider.length;

    i++;


    if (i > [slider.length-1]) {i = 0}


    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

showSlides();

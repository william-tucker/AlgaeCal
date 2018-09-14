var vid = document.getElementById("myVideo");

vid.ontimeupdate = function() {myFunction()};

function myFunction() {
    if (vid.currentTime >= 133){
    	$("#bundle_section").fadeIn(800);
    }
    if (vid.currentTime <= 133){
    	$("#bundle_section").fadeOut(800);
    }
}
var section = "";

var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  // bind events
  var pauseButton = document.getElementById("flipArrow");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });
  
}

function scrollLock() {
    var tempSection = document.getElementById("body");
    tempSection.classList.toggle("bodyLock");
}

function flipToBack(id) {
    var flip_card = document.getElementById("flip");
    flip_card.classList.toggle("flipped");
    
    setTimeout(scaleCard, 500)
    setTimeout(bodyColorW, 1050)
    
    if (id == "undA") {
        section = document.getElementById("about");
        section.classList.toggle("sectionIn");
        section = document.getElementById("body");
        section.classList.toggle("bodyUnlock");
    } else if (id == "undW") {
        section = document.getElementById("work");
        section.classList.toggle("sectionIn");
        section = document.getElementById("body");
        section.classList.toggle("bodyUnlock");
    } else if (id == "undC") {
        section = document.getElementById("contact");
        section.classList.toggle("sectionIn");
    }
    
    section = id;
}

function flipToFront() {
    if (section == "undA") {
        section = document.getElementById("about");
        section.classList.toggle("sectionOut");
        section.classList.remove("sectionIn");
        section.classList.remove("sectionOut");
        section = document.getElementById("body");
        section.classList.remove("bodyUnlock");
    } else if (section == "undW") {
        section = document.getElementById("work");
        section.classList.toggle("sectionOut");
        section.classList.remove("sectionIn");
        section.classList.remove("sectionOut");
        section = document.getElementById("body");
        section.classList.remove("bodyUnlock");
    } else if (section == "undC") {
        section = document.getElementById("contact");
        section.classList.toggle("sectionOut");
        section.classList.remove("sectionIn");
        section.classList.remove("sectionOut");
    }
    
    setTimeout(flipTo, 70)
}

function scaleCard() {
    var scale_card = document.getElementById("scale");
    scale_card.classList.remove("cardScale");
    scale_card.classList.remove("cardReScale");
    scale_card.classList.toggle("cardScale");
    scale_card.classList.toggle("cardHide");
}

function bodyColorW() {
    document.body.style.backgroundColor = 'white';
}

function bodyColorG() {
    document.body.style.backgroundColor = '#f5f5f5';
}

function flipFace() {
    var flip_card = document.getElementById("flip");
    flip_card.classList.toggle("flipped");
}

function flipTo() {
    var scale_back = document.getElementById("scale");
    scale_back.classList.toggle("cardHide");
    setTimeout(bodyColorG, 200)
    
    scale_back.classList.toggle("cardReScale");
    setTimeout(flipFace, 1050)
    
    section = "";
}

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$('#flipArrow').click(function(event) {
  if(!event.detail || event.detail == 1) {
    flipToFront();
  }
});

$(document).ready(function() {
    $("#bgColor").one("mouseover", function() {
        $("#bgColor body").addClass('bgColorWhite');
    });
    
    $(".contactForm").validate();
});

$('map').imageMapResize();

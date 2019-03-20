var section = "";

function flipToBack(id) {
    var flip_card = document.getElementById("flip");
    flip_card.classList.toggle("flipped");
    
    setTimeout(scaleCard, 500)
    setTimeout(bodyColorW, 1050)
    
    if (id == "undA") {
        section = document.getElementById("about");
        section.classList.toggle("sectionIn");
    } else if (id == "undW") {
        section = "work";
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
    } else if (section == "undW") {
        section = "work";
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

$(document).ready(function() {
    $("#bgColor").one("mouseover", function() {
        $("#bgColor body").addClass('bgColorWhite');
    });
    
    $(".contactForm").validate();
});

$('map').imageMapResize();

/*<script type="text/javascript" src="jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="salvador_script.js"></script>*/
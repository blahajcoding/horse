var snd = new Audio("assets/neigh.mp3");
var count = 0;
function neigh() {
    if (count == 66) {
        var snd = new Audio("assets/not67.mp3");
        snd.play()
        counterIncrement()
    }
    else if ((count + 1) % 50 == 0 && (count + 1) != 0) {
        var snd = new Audio("assets/well.mp3");
        var totalImages = 26;
        var randomNumber = Math.floor(Math.random() * totalImages) + 1;
        var horse = document.getElementById("overlay");
        horse.src = "images/" + randomNumber + ".jpg";
        snd.play()
        horse.classList.add("jumpscare");
        counterIncrement()
        setTimeout(function() {
            horse.classList.remove("jumpscare");
        }, 1000);

    }
    else {
        var snd = new Audio("assets/neigh.mp3");
        snd.play()
        counterIncrement()
    }
}

function counterIncrement() {
    count == count++
}

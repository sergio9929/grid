document.addEventListener("DOMContentLoaded", function (event) {
    for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
        document.getElementsByTagName("video")[i].volume = 0;
        document.getElementsByTagName("video")[i].addEventListener("mouseover", unmute);
        document.getElementsByTagName("video")[i].addEventListener("mouseleave", mute);
        document.getElementsByTagName("video")[i].addEventListener("click", change);
    }
})

function unmute() {
    setTimeout(() => {
        this.volume = .4;
        this.play();
    }, 10)
}

function mute() {
    this.pause();
    this.currentTime = 0;
    this.volume = 0;
}

function change() {
    if (this.paused) {
        this.volume = .4;
        this.play();
    } else {
        this.pause();
        this.volume = 0;
    }
}
document.addEventListener("DOMContentLoaded", function (event) {
    for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
        document.getElementsByTagName("video")[i].addEventListener("mouseover", unmute)
        document.getElementsByTagName("video")[i].addEventListener("mouseleave", mute)

    }
})

function unmute() {
    var video = this;
    video.volume = .4;
    video.muted = false;
    
}
function mute() {
    var video = this;
    video.muted = true;
    video.volume = 0;
}
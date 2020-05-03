var videoPosition = getOffsetHeight();
var videoLoaded = true;
var timer;
document.addEventListener("DOMContentLoaded", function (event) {
    var timer;
    for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
        document.getElementsByTagName("video")[i].volume = 0;
        document.getElementsByTagName("video")[i].play();
        document.getElementsByTagName("video")[i].parentElement.addEventListener("mouseover", unmute);
        document.getElementsByTagName("video")[i].parentElement.addEventListener("mouseleave", mute);
        document.getElementsByTagName("video")[i].parentElement.addEventListener("click", change);
        document.addEventListener("scroll", ()=>{
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => { scroll() }, 50);
        });
        window.addEventListener("resize", () => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => { videoPosition = getOffsetHeight()}, 100);
        })
    }
});

function unmute(){
    this.parentElement.getElementsByTagName("video")[0].volume = .4;
}

function mute(){
    this.parentElement.getElementsByTagName("video")[0].volume = 0;
}

function scroll() {
    if (window.pageYOffset - 100 > videoPosition) {
        for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
            if (!document.getElementsByTagName("video")[i].paused) {
                change1(document.getElementsByTagName("video")[i])
            }
        }
        videoLoaded = false;
    } else {
        if (videoLoaded == false) {
            for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
                change1(document.getElementsByTagName("video")[i])
            }
            videoLoaded = true;
        }
    }
}

function change() {
    var video = this.parentElement.getElementsByTagName("video")[0];
    if (event.detail > 1) {
        video.currentTime = 0;
        video.volume = .4;
        video.parentElement.children[0].className = "play";
        video.play();
    } else {
        if (video.paused) {
            video.volume = .4;
            video.parentElement.children[0].className = "play";
            setTimeout(() => {
            }, 200)

            video.play();

        } else {
            video.pause();
            video.volume = 0;
            video.parentElement.children[0].className = "pause";

        }
    }
}

function change1(video) {
    if (video.paused) {
        video.volume = 0;
        video.parentElement.children[0].className = "play";
        video.play();

    } else {
        video.pause();
        video.parentElement.children[0].className = "pause";
    }
}

function getOffsetHeight() {
    var videoMaxPosition = 0;
    for (let i = 0; i < document.getElementsByTagName("video").length; i++) {
        var elem = document.getElementsByTagName("video")[i];
        var offsetTop = elem.offsetHeight;
        do {
            if (!isNaN(elem.offsetTop)) {
                offsetTop += elem.offsetTop;
            }
        } while (elem = elem.offsetParent);
        if (offsetTop > videoMaxPosition) {
            videoMaxPosition = offsetTop;
        }
    }
    return videoMaxPosition;
}
console.log("Script loaded.");

let progress = document.getElementById("audioprogress");
let audiofile = document.getElementById("audiofile");
let ctrlIcon = document.getElementById("ctrlicon");

audiofile.onloadedmetadata = function() {
    progress.max = audiofile.duration;
    progress.value = audiofile.currentTime;
}

function playpause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        audiofile.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        audiofile.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

audiofile.autoplay = true;

if (audiofile.play()) {
    setInterval(() => {
        progress.value = audiofile.currentTime;
    }, 500)
}

progress.onchange = function() {
    audiofile.play();
    audiofile.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

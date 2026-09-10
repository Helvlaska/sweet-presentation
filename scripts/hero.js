var video = document.getElementById('heroVideo');
var cover = document.getElementById('heroCover');
var controls = document.querySelector('.hero__controls');
var playBtn = document.getElementById('heroPlayBtn');
var playIcon = document.getElementById('heroPlayIcon');
var volumeBtn = document.getElementById('heroVolumeBtn');
var volumeIcon = document.getElementById('heroVolumeIcon');

function startVideo() {
    cover.classList.add('hero__cover--hidden');
    controls.classList.add('hero__controls--visible');
    video.play();
    playIcon.src = 'assets/icons/hero/icon-pause.png';
}

cover.addEventListener('click', startVideo);

function togglePlay() {
    if (cover.classList.contains('hero__cover--hidden') === false) {
        startVideo();
        return;
    }
    if (video.paused) {
        video.play();
        playIcon.src = 'assets/icons/hero/icon-pause.png';
    } else {
        video.pause();
        playIcon.src = 'assets/icons/hero/icon-play.png';
    }
}

video.addEventListener('ended', function() {
    cover.classList.remove('hero__cover--hidden');
    controls.classList.remove('hero__controls--visible');
    playIcon.src = 'assets/icons/hero/icon-play.png';
});

playBtn.addEventListener('click', togglePlay);

function toggleVolume() {
    video.muted = !video.muted;
    volumeIcon.src = video.muted
        ? 'assets/icons/hero/icon-volume-ON.png'
        : 'assets/icons/hero/icon-volume-OFF.png';
}

volumeBtn.addEventListener('click', toggleVolume);

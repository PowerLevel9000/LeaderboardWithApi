const audio = document.getElementById('myAudio');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeControl = document.getElementById('volumeControl');

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.loop = true;
    audio.play();
    playPauseBtn.innerHTML = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = 'Play';
  }
});

muteBtn.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = false;
    muteBtn.innerHTML = 'Mute';
  } else {
    audio.muted = true;
    muteBtn.innerHTML = 'Unmute';
  }
});

volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value;
});

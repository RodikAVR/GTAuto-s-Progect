var audio = new Audio('file:///C:/Users/user/Downloads/FrankJavCee_-_SimpsonWave1995_69011711.mp3');
audio.loop = true;

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function restartAudio() {
  audio.currentTime = 0;
  audio.play();
}

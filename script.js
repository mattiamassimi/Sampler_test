
const keyboard = document.getElementById('keyboard');
const key1 = document.getElementById('key1');
const key2 = document.getElementById('key2');
const key3 = document.getElementById('key3');

// const audio = document.getElementById('audio');
// const progress = document.getElementById('progress');
// const progressContainer = document.getElementById('progress-container');
// const title = document.getElementById('title');
// const cover = document.getElementById('cover');
// const currTime = document.querySelector('#currTime');
// const durTime = document.querySelector('#durTime');




const audioprova= new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();


// // Song titles
// const songs = ['Algorithm', 'summer', 'ukulele'];

// // Keep track of song
// let songIndex = 0;

// // Initially load song details into DOM
// loadSong(songs[songIndex]);

function playSound(){
    keyboard.classList.add('play');
    audioprova.start();
}

function pauseSound(){
    keyboard.classList.remove('play');
    audioprova.stop();
}

// Update song details
// function loadSong(song) {
//     title.innerText = song;
//     audio.src = `${song}.mp3`;
//     cover.src = `${song}.jpg`;
//   }

// function playSong() {
//     musicContainer.classList.add('play');
//     playBtn.querySelector('i.fas').classList.remove('fa-play');
//     playBtn.querySelector('i.fas').classList.add('fa-pause');
//     audio.play();
//   }
  
//   // Pause song
//   function pauseSong() {
//     musicContainer.classList.remove('play');
//     playBtn.querySelector('i.fas').classList.add('fa-play');
//     playBtn.querySelector('i.fas').classList.remove('fa-pause');
  
//     audio.pause();
//   }

  // Event listeners
key1.addEventListener('click', () => {
    const isPlaying = keyboard.classList.contains('play')
  
    if (isPlaying) {
      pauseSound();
    } else {
      playSound();
  }});
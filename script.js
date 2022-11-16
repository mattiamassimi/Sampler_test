

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


var sampler = new Tone.Sampler({
	"C5" : "Violin_C5.mp3"
}).toDestination();





// const shift_1=new PitchShift

// // Song titles
// const songs = ['Algorithm', 'summer', 'ukulele'];

// // Keep track of song
// let songIndex = 0;

// // Initially load song details into DOM
// loadSong(songs[songIndex]);

function playSound(l){
    keyboard.classList.add('play');
    sampler.triggerAttack(l);
}

function pauseSound(l){
    keyboard.classList.remove('play');
    sampler.triggerRelease(l);
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
let keys = [];
let keyNote=['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6'];

for(let i=0; i<8; i++){
  e=document.createElement("button");
  e.classList.add("key");
  label=document.createElement("h2");
  label.textContent=keyNote[i];
  e.append(label);
  keyboard.append(e);
  keys.push(e);
} 


keys.forEach(element =>{
  element.onclick=function(){
    let lab = element.getElementsByTagName('h2')[0].innerText;
    const isPlaying = keyboard.classList.contains('play')
    console.log(lab);
    if (isPlaying) {
      pauseSound(lab);
    } else {
      playSound(lab);
    }
  }
});


// key1.addEventListener('click', () => {
//     const isPlaying = keyboard.classList.contains('play')
  
//     if (isPlaying) {
//       pauseSound();
//     } else {
//       playSound();
//   }});

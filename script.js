
const keyboard = document.getElementById('keyboard');
const key=document.getElementById('key');

//Sampler
var sampler = new Tone.Sampler({
	"C5" : "Violin_C5.mp3"
}).toDestination();


//Play & stop functions
function playSound(l){
    //keyboard.classList.add('play');
    sampler.triggerAttack(l);
}

function stopSound(l){
    //keyboard.classList.remove('play');
    sampler.triggerRelease(l);
}


//Button and label creation
let keys = [];
let keyNote=['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6'];

for(let i=0; i<keyNote.length; i++){
  e=document.createElement("button");
  e.classList.add("key");
  label=document.createElement("h2");
  label.textContent=keyNote[i];
  e.append(label);
  keyboard.append(e);
  keys.push(e);
} 


//provare polifonia
//mettere keyboard control


// listener
keys.forEach(element =>
  {
  element.onmousedown=function()
  { 
    let note = element.getElementsByTagName('h2')[0].innerText;
    //const isPlaying = keyboard.classList.contains('play')
    
    playSound(note);

    element.onmouseup=function()
      {
          stopSound(note);
      }
  }
  });

// key=document.onkeydown=function(){
//   console.log(key);

//   })
//b=document.getElementsByTagName("button");
//console.log(b);

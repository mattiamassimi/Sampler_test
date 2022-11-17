
const keyboard = document.getElementById('keyboard');
const key=document.getElementById('key');

//Sampler
var sampler = new Tone.Sampler({
	"C5" : "Violin_C5.mp3"
}).toDestination();


//Play & stop functions
function playSound(l){

    sampler.triggerAttack(l);
}

function stopSound(l){

    sampler.triggerRelease(l);
}


//Button and label creation
let keys = [];
let keyNote=['C', 'D', 'E', 'F', 'G', 'A', 'B'];
for(let i=4; i<6; i++){
  for(let j=0; j<keyNote.length; j++){
    e=document.createElement("button");
    e.classList.add("key");
    label=document.createElement("h2");
    label.textContent=keyNote[j]+i.toString();
    e.append(label);
    keyboard.append(e);
    keys.push(e);
  }
} 


//provare polifonia
//mettere keyboard control
//collegamento active button css
//ADSR
//Quanti sample utilizzare per avere un buon risutato (1 ogni tono?)
//switch tra strumenti


// listener
keys.forEach(element =>
  {
  element.onmousedown=function()
  { 
    let note = element.getElementsByTagName('h2')[0].innerText;
    
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
// b=document.getElementsByTagName("button");
//b.classList.add("active")

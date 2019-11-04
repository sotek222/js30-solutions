const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector("[name=text]").value;

function populateVoices(){
  voices = speechSynthesis.getVoices();
  const voiceOptions = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value=${voice.name}>${voice.name} - ${voice.lang}</option>`)
    .join('');
  voicesDropdown.innerHTML += voiceOptions;
};

function changeVoice(e){
  msg.voice = voices.find(voice => voice.name === e.target.value)
  toggleSpeech();
};

function toggleSpeech(startOver = true){
  speechSynthesis.cancel();
  if(startOver) {
    speechSynthesis.speak(msg);
  }
}

function changeSettings(){
  msg[this.name] = this.value;
  toggleSpeech(false);
}

// speechSynthesis is a global variable that gives access to different voices provided by the browser.
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', changeVoice);
options.forEach(option => option.addEventListener('change', changeSettings));
speakButton.addEventListener('click', toggleSpeech);
stopButton.addEventListener('click', toggleSpeech.bind(null, false));

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

recognition.interimResults = true;

let p = document.createElement('p');

const wordsContainer = document.querySelector('.words');
wordsContainer.appendChild(p);

recognition.addEventListener('result', (e) => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    p.textContent = transcript;

  if (e.results[0].isFinal){
    p = document.createElement('p');
    wordsContainer.appendChild(p);
  };

  if(transcript.includes('vaporwave')){
    window.location.href = "https://www.youtube.com/watch?v=aQkPcPqTq4M"
  }
});

recognition.addEventListener('end', recognition.start);
recognition.start();
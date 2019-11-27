const timeLeft = document.querySelector('.display__time-left');
const times = document.querySelectorAll('button');
const timeForm = document.querySelector('#custom');
let interval;


function handleTime(e, seconds){
  clearInterval(interval);

  if(seconds > 60){
    let minutes = Math.floor(seconds / 60);
    let currentSeconds = 0;
    interval = setInterval(() => {
      if (currentSeconds === 0 && minutes === 0) clearInterval(interval);
      if (currentSeconds < 0 && minutes > 0) minutes--, currentSeconds = 59;
      timeLeft.innerText = (currentSeconds < 10) ? 
      `${minutes}:0${currentSeconds}` : 
      `${minutes}:${currentSeconds}`;

      currentSeconds--;
    }, 1000);
  } else {
    interval = setInterval(() => {
      if (seconds === 0) clearInterval(interval);
      timeLeft.innerText = (seconds < 10) ? `0:0${seconds}` : `0:${seconds}`;
      seconds--;
    }, 1000);
  };
};

function handleSubmit(e){
  e.preventDefault();
  const seconds = e.target.querySelector('input').value * 60;
  handleTime(e, seconds)
}


times.forEach(time => time.addEventListener('click', (e) => handleTime(e, time.dataset.time)));
timeForm.addEventListener('submit', handleSubmit);
const timeLeft = document.querySelector('.display__time-left');
const timeToReturn = document.querySelector('.display__end-time');
const times = document.querySelectorAll('.timer__button');
const timeForm = document.querySelector('#custom');
const pauseBtn = document.querySelector('.pause__button');
const resumeBtn = document.querySelector('.resume__button');
let interval;
let totalTimeLeft;
let countingDown = false;

timeLeft.textContent = "00:00";

function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = `${minutes < 10 ? "0" + minutes : minutes}:${remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds}`;
  timeLeft.textContent = display;
  document.title = display;
};

function timer(seconds){
  clearInterval(interval);
  countingDown = true;
  // we get the current time the timer starts at;
  const now = Date.now();
  // we get the time when the timer needs to stop;
  const then = now + (seconds * 1000);
  // we call this fucntion one time so that it displays without a pause.
  // otherwise we have to wait the length of time, in the second arg of the setInterval 
  displayTimeLeft(Math.round((then - now) / 1000));
  dispalyTimeBack(then);

  // setInterval is not ideal for a timer on it's own for decrementing because 
  // it may stop if you leave the page to another tab or scroll,
  // in this case it's okay because we are re-calculating the time from Date.now(); 
  // so it will always adjust correctly. 
  interval = setInterval(function(){
    // We caculate then - the current time we are at in miliseconds divided by 1000 to get the seconds 
    let secondsLeft = Math.round((then - Date.now()) / 1000);
    totalTimeLeft = secondsLeft;
    if (secondsLeft <= 0) clearInterval(interval);
    displayTimeLeft(secondsLeft);
  }, 1000);
};

function handleSubmit(e){
  const formtime = e.target.children[0].value * 60;
  e.preventDefault();
  timer(formtime);
};

function dispalyTimeBack(timestamp){
  const end = new Date(timestamp);
  const hours = end.getHours();

  const standardHours = hours > 12 ? hours - 12 : hours;

  const minutes = end.getMinutes();
  timeToReturn.textContent = `Be back at ${standardHours}:${minutes < 10 ? "0" + minutes : minutes} ${hours > 11 || hours === 23 ? "PM" : "AM" }`;
};

function resumeTimer(){
  if (interval && !countingDown) timer(totalTimeLeft);
};

function pauseTimer() {
  if (countingDown) clearInterval(interval), countingDown = false;
};

times.forEach(time => time.addEventListener('click', () => timer(time.dataset.time)))
timeForm.addEventListener('submit', handleSubmit);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer)
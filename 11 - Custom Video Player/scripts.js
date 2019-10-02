const video = document.querySelector('video');
const togglePlayBtn = document.querySelector('.player__button.toggle');
const playControls = document.querySelector('.player__controls');
const progressBar = document.querySelector('.progress');
const progressFilled = progressBar.querySelector('.progress__filled');
let fruit = ("b" + "a" + +"a" + "a").toLowerCase();
let mouseDown = false;

function handleScreenClick(){
  if(video.paused){
    video.play();
  } else {
    video.pause();
  };
};

function handleToggleClick(){
  if (video.paused){
    togglePlayBtn.innerText = "►";
  } else {
    togglePlayBtn.innerText = "❚❚";
  };
};

function handleProgress(){
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
};

function scrub(event){
  const scrubTime = (event.x / progressBar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', handleScreenClick);
togglePlayBtn.addEventListener('click', handleScreenClick);
video.addEventListener('play', handleToggleClick);
video.addEventListener('pause', handleToggleClick);
video.addEventListener('timeupdate', handleProgress);

progressBar.addEventListener('click', scrub)
progressBar.addEventListener('mousedown', () => mouseDown = true)
progressBar.addEventListener('mouseup', () => mouseDown = false)
progressBar.addEventListener('mousemove', (e) => mouseDown && scrub(e))


playControls.addEventListener('click', e => {
  if (e.target.dataset.action === "skip"){
    const skipAmount = parseInt(e.target.dataset.skip);
    video.currentTime += skipAmount;
  };

  if (e.target.dataset.action === "fullscreen"){
    video.webkitRequestFullscreen();
  }
});

playControls.addEventListener('change', e => {
  if (e.target.name === "volume"){
    const volume = e.target.value;
    video.volume = volume;
  };

  if (e.target.name === "playbackRate"){
    const rate = e.target.value;
    video.playbackRate = rate;
  };
});

playControls.addEventListener('mousemove', e => {
  if (e.target.name === "volume") {
    const volume = e.target.value;
    video.volume = volume;
  };

  if (e.target.name === "playbackRate") {
    const rate = e.target.value;
    video.playbackRate = rate;
  };
});
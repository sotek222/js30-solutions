const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');


// First Attempt:
// function handleMouseMove(e){
//   const mousePos = e.clientY - this.offsetTop;
//   const barHeight = this.offsetHeight;
//   const scrubSpeed = (mousePos / barHeight).toFixed(1) * 4;
//   bar.style.height = `${Math.ceil((mousePos / barHeight) * 100)}%`;
//   bar.innerText = `${scrubSpeed}x`;
//   video.playbackRate = scrubSpeed;
// };

// speed.addEventListener('mousemove', handleMouseMove)


function handleStyle(percent, playbackRate){
  bar.style.height = percent + "%";
  bar.textContent = playbackRate.toFixed(1) + "x";
  video.playbackRate = playbackRate;
};


function handleMove(e){
  const y = e.pageY - this.offsetTop;
  const percent = ((y / this.offsetHeight) * 100);
  const min = 0.4, max = 4;
  const playbackRate = (percent * (max - min) + max) / 100;
  handleStyle(percent, playbackRate);
};

speed.addEventListener('mousemove', handleMove);
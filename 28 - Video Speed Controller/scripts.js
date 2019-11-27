const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');


// First Attempt:
// function handleMouseMove(e){
//   const mousePos = e.clientY - this.offsetTop;
//   const barHeight = this.offsetHeight;
//   const scrubSpeed = (mousePos / barHeight).toFixed(1) * 2;
//   bar.style.height = `${Math.ceil((mousePos / barHeight) * 100)}%`;
//   bar.innerText = `${scrubSpeed}x`;
//   video.playbackRate = scrubSpeed;
// };

// speed.addEventListener('mousemove', handleMouseMove)
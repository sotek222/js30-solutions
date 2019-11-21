const slider = document.querySelector('.items');

let isDown = false;
let startX, scrollLeft; 

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // pageX gives us the x coords of the mouse event 
  // we use the offsetLeft of the slider element so that we 
  // adjust the coords if the slider happens to have different margins
  // or the page width changes the sliders dimensions etc.
  startX = e.pageX - slider.offsetLeft;
  // we need to store the initial scrollLeft 
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  // prevents the potential default behavior, like selecting text, etc.
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = (scrollLeft - walk) * 3;
});

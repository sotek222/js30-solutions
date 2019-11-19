console.log('Loaded')

const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function hoverIn(){
  this.classList.add('trigger-enter');
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const { height, width, top, left } = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();


  background.style.setProperty('width', `${width}px`);
  background.style.setProperty('height', `${height}px`);
  background.style.setProperty('transform', 
  `translate(${left - navCoords.left}px, ${top - navCoords.top}px)`);

};

function hoverOut(){
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
};

triggers.forEach(trigger => {
  trigger.addEventListener('mouseover', hoverIn);
  trigger.addEventListener('mouseleave', hoverOut);
});

const hero = document.querySelector('.hero');
const header = document.querySelector('h1');

function randColor(){
  return Math.floor(Math.random() * 255);
};

function shadowHandle(e){
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  const walk = 800; 

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  };
  
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));


  
  header.style.textShadow = `
  ${xWalk}px ${yWalk}px rgb(${randColor()},${randColor()},${randColor()},1),
  ${xWalk * -1}px ${yWalk}px rgb(${randColor()},${randColor()},${randColor()},1),
  ${yWalk}px ${xWalk}px rgb(${randColor()},${randColor()},${randColor()},1),
  ${yWalk * -1}px ${xWalk}px rgb(${randColor()},${randColor()},${randColor()},1)
  `;
};

document.addEventListener('DOMContentLoaded', () => setInterval(() => {
  document.body.style.backgroundColor = `rgb(${randColor()},${randColor()},${randColor()},1)`
}, 500))
hero.addEventListener('mousemove', shadowHandle);


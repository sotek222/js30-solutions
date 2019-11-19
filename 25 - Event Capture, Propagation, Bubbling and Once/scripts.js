const divs = document.querySelectorAll('div');
const button = document.querySelector('button');


function whatIsThis(e){
  // we use the stopPropagation method on the event, which will stop all bubbling
  e.stopPropagation();
  // due to event bubbling this will change as what is captured and what bubbles 
  // will first go down from body -> div -> nested div -> nested div, then bubble upwards
  console.log("This is:", this.className)
};

divs.forEach(div => div.addEventListener('click', whatIsThis));

button.addEventListener('click', () => {
  console.log('Clicked!')
}, { once: true })

// function bodyClick(){
//   console.log("body click");
// }
// since body is listening for a click, it will fire if the child is clicked as well.
// unless we stop propagation 
// document.body.addEventListener('click', bodyClick);
// capture true tells the function to be called on the way down from the parent div first,
// instead of bubbling from the inner child up.
// by default it is set to false.
// divs.forEach(div => div.addEventListener('click', whatIsThis, {capture: false}));


// the once key unbinds the event on the divs after the initial firing.
// so an event only fires one time.
// divs.forEach(div => div.addEventListener('click', whatIsThis, { 
//   capture: false,
//   once: true 
// }));
// it is the equivalent of removing an eventListener:
// function whatIsThis(e){
//   console.log("only fires once!!!");
//   this.removeEventListener('click', whatIsThis);
// }
// divs.forEach(div => div.addEventListener('click', whatIsThis, {capture: false}));
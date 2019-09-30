const inbox = document.querySelector('.inbox');
const inputs = Array.from(inbox.querySelectorAll('input'));

let clicked = false;
let shift = false;
let startBox;

inputs.forEach(input => {
  input.addEventListener('click', e => {
    if(!shift){
      startBox = inputs.indexOf(e.target);
    }
    if(shift){ 
      clicked = !clicked;
      let stopBox = inputs.indexOf(e.target);
      if(startBox > stopBox){
        for (let i = stopBox; i < startBox; i++) {
          inputs[i].checked = true;
        }
      } else {
        for (let i = startBox; i < stopBox; i++) {
          inputs[i].checked = true; 
        }
      }
    }
  });
});

document.addEventListener('keydown', e => {
  if(e.keyCode === 16){
    shift = true;
    console.log(shift)
  }
});

document.addEventListener('keyup', e => {
  if (e.keyCode === 16) {
    shift = false;
    console.log(shift)
  }
})
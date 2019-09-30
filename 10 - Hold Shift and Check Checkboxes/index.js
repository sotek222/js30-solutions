// const inbox = document.querySelector('.inbox');
// const inputs = Array.from(inbox.querySelectorAll('input'));

// let shift = false;
// let startBox;

// inputs.forEach(input => {
//   input.addEventListener('click', e => {
//     if(!shift){
//       startBox = inputs.indexOf(e.target);
//     }
//     if(shift){ 
//       let stopBox = inputs.indexOf(e.target);
//       if(startBox > stopBox){
//         for (let i = stopBox; i < startBox; i++) {
//           inputs[i].checked = true;
//         }
//       } else {
//         for (let i = startBox; i < stopBox; i++) {
//           inputs[i].checked = true; 
//         }
//       }
//     }
//   });
// });

// document.addEventListener('keydown', e => {
//   if(e.keyCode === 16){
//     shift = true;
//     console.log(shift)
//   }
// });

// document.addEventListener('keyup', e => {
//   if (e.keyCode === 16) {
//     shift = false;
//     console.log(shift)
//   }
// })
// -------------------------------------WES BOS SOLUTION---------------------------------//
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e){
  let inBetween = false; 
  if(e.shiftKey && this.checked){
    checkboxes.forEach(cb => {
      if (cb === this || cb === lastChecked) {
        inBetween = !inBetween;
      } 
      if (inBetween) {
        cb.checked = true;
      }
    })

  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheck);
});
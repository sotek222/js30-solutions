const pressedArray = [];
const secret = "vaporwave";
window.addEventListener('keyup', (e) => {
  pressedArray.push(e.key);
  pressedArray.splice(-secret.length - 1, pressedArray.length - secret.length)
  if (pressedArray.join("") === secret) {
    window.location.href = 'https://www.youtube.com/watch?v=GQ1J0UNQwI0';

  }
});
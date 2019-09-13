document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('keydown', hitDrum);

  function hitDrum(e) {
    let key = document.querySelector(`[data-key="${e.keyCode}"]`);

    if (!key) return;
    key.classList.add("playing");
    playSound(e);
  }

  function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; // rewinds to the start so it can be played often
    audio.play();
  };

  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing")
  }

  const keys = Array.from(document.querySelectorAll(".key"));
  keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
  })
})
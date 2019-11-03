const anchors = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink(){
  const coords = this.getBoundingClientRect();
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  const x = coords.left + window.scrollX;
  const y = coords.top + window.scrollY;

  highlight.style.transform = `translate(${x}px, ${y}px)`
};

anchors.forEach(anchor => anchor.addEventListener('mouseenter', highlightLink));
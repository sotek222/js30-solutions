document.addEventListener('DOMContentLoaded', (e) => {
  console.log("DOM Content Loaded");
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext('2d');
  let hue = 0;
  let isDrawing = false;
  let lastX = 0, lastY = 0;
  let direction = true;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  
  
  function draw(e){
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    
    ctx.beginPath();
    // The starting location
    ctx.moveTo(lastX, lastY);
    
    // The ending location
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    
    lastX = e.offsetX, lastY = e.offsetY
    hue++;
    if(hue >= 360){
      hue = 0;
    };

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
      direction = !direction;
    }

    if(direction){
      ctx.lineWidth++
    } else {
      ctx.lineWidth--;
    }
  }

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true
    lastX = e.offsetX;
    lastY = e.offsetY;
  });
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);

})
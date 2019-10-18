const video = document.querySelector('.player');
const playButton = document.querySelector('.play-button');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(error => console.error("DENIED", error));
};

playButton.addEventListener('click', getVideo);

function paintToCanvas(){
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // Takes pixels from canvas.
    let pixels = ctx.getImageData(0, 0, width, height);
    // Distorts them.
    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    pixels = greenScreen(pixels);
    // Set those new pixels in canvas.
    ctx.putImageData(pixels, 0, 0);
  }, 1);
};

function takePhoto(){
  snap.currentTime = 0;
  snap.play();
// get's the pixels.data from the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'weird');
  link.innerHTML = `<img src=${data} />`
  strip.insertAdjacentElement('beforeend', link);
};

function redEffect(pixels){
  for(let i = 0; i < pixels.data.length; i += 4){
    pixels.data[i] = pixels.data[i] + 175; // red;
    pixels.data[i + 1] = pixels.data[i + 1] - 50;// green;
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5;// blue;
  };
  return pixels;
};

function rgbSplit(pixels){
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i] // red;
    pixels.data[i + 100] = pixels.data[i + 1];// green;
    pixels.data[i - 150] = pixels.data[i + 2];// blue;
  };
  return pixels;
};


function greenScreen(pixels){
  const levels = {};

  document.querySelectorAll(".rgb input").forEach(input => {
    levels[input.name] = input.value;
  });
  // We increment by 4 because in pixels.data groups of 4 int represent rgba values
  for (let i = 0; i < pixels.data.length; i += 4) {
    let red = pixels.data[i];
    let green = pixels.data[i + 1];
    let blue = pixels.data[i + 2];

    if(red >= levels.rmin 
      && green >= levels.gmin 
      && blue >= levels.bmin 
      && red <= levels.rmax 
      && green <= levels.gmax 
      && blue <= levels.bmax
    ){
      pixels.data[i + 3] = 0;
    };
  };
  return pixels;
};

video.addEventListener('canplay', paintToCanvas);
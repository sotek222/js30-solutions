const videoTimes = Array.from(document.querySelectorAll('li')).map(node => node.dataset.time);

const totalSeconds = videoTimes
  .map(time => {
    const [ minutes, seconds ] = time.split(":");
    return parseInt(minutes * 60) + parseInt(seconds);
  })
  .reduce((acc, cv) => acc + cv);

const seconds = totalSeconds % 60,
minutes = Math.floor(totalSeconds / 60) % 60,
hours = Math.floor(totalSeconds / 3600);

console.log("Total Video Length:", `${hours}:${minutes}:${seconds}`);
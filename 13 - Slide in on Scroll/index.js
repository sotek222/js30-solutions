const sliderImages = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };

};

function checkSlide(e){
  sliderImages.forEach(img => {
    // determines when we should start the slide in. 
    const slideInAt = (window.scrollY + window.innerHeight) - (img.height / 2);
    // determines the bottom of the image by taking the height of the image and adding 
    // how far the top of the image is from the 
    const imageBottom = img.offsetTop + img.height;
    const isHalfShown = slideInAt > img.offsetTop;
    const notScrolledPast = window.scrollY < imageBottom;

    if(isHalfShown && notScrolledPast){
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    };
  });
};

window.addEventListener('scroll', debounce(checkSlide));
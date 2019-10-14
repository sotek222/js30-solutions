const bandsList = document.querySelector("#bands");

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 
'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(band){
  return band.replace(/^(a |an |the )/i, "");
};

bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

bands.forEach(band => {
  const html = `<li>${band}</li>`;
  bandsList.insertAdjacentHTML('beforeend', html);
})
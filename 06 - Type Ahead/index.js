document.addEventListener('DOMContentLoaded', () => {
  const cities = [];
  const suggestions = document.querySelector(".suggestions");
  const search = document.querySelector(".search");

  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


  function fetchCities(){
    return fetch(endpoint)
    .then(resp => resp.json())
  };

  function setCities(){
    fetchCities()
      .then(citiesData => cities.push(...citiesData))
  };

  function findMatches(searchTerm, cities){
    return cities.filter(place => {
      const regExp = new RegExp(searchTerm, 'gi');
      return place.city.match(regExp) || place.state.match(regExp);
    })
  };

  function displayMatches(){
    if(this.value !== ""){
      const matchArray = findMatches(this.value, cities);
      const html = matchArray.map(place => {
        const regExp = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regExp, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(regExp, `<span class="hl">${this.value}</span>`)
        return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${place.population}</span>
        </li>
        `;
      }).join("");

      suggestions.innerHTML = html;
    } 
  }

search.addEventListener('input', displayMatches);

setCities();

});
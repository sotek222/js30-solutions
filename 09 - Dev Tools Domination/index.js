const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

    // Regular
    console.log("hello")
    
    // Interpolated
    console.log("hello I am a %s string!", "great")

    // Styled
    console.log("%c I am some great text!", "font-size: 50px; background: red; text-shadow: 10px 10px 0 blue");
    // warning!
    console.warn("OH NO!!!")
    // Error :|
    console.error("ERRORRRRRR!!")
    // Info
    console.info("Dogs smell weird when they are wet.")
    // Testing
    const p = document.querySelector('p')
    console.log(p.classList.contains("ouch"), "That is wrong");
    // clearing
    console.clear();
    // Viewing DOM Elements
    console.dir(p);
    // Grouping together
    dogs.forEach(({name, age}) => {
      console.groupCollapsed(name);
      console.log(`This is ${name}`);
      console.log(`${name} is ${age} years old.`);
      console.log(`${name} is ${age * 7} dog years old.`);
      console.groupEnd(name);
    });
    // counting
    console.count("hugo");
    console.count("hugo");
    console.count("hugo");
    console.count("hugo");
    console.count("hugo");
    console.count("hugo");
    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
    .then(resp => resp.json())
    .then(data => {
      console.timeEnd('fetching data');
    })

    // table
    console.table(dogs);
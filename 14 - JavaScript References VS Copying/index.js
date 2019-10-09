// start with strings, numbers and booleans
let num = 500;

let numTwo = num; 

numTwo += 300;

console.log(numTwo);
// => 800

console.log(num);
// => 500

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// You might think we can just do something like this:
const copy = players;
// however what happens when we update that array?
copy.push("Sotek");
// => 5
// now here is the problem!
console.log(players);
// => ['Wes', 'Sarah', 'Ryan', 'Poppy', 'Sotek];
// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const slicedCopy = players.slice();
// or create a new array and concat the old one in
const concatArr = ["Lisa"].concat(players);

// or use the new ES6 Spread
const ES6Copy = [...players];
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

    // and think we make a copy:

    // how do we take a copy instead?
const assignObj = Object.assign({}, person)
    // We will hopefully soon see the object ...spread
const newPerson = {...person}
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

console.log(foundAnimal);
console.log(animals[7]);


const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

console.log(startsWithS);



//  Worked with filter to pull info from array.  Would not have figured out the second part of exercise without help

import { Sieve } from './../src/project.js';

describe ('Sieve', () => {

  test('should create an array starting with 2 and ending with number entered by user', () => {
    const newArray = new Sieve(15);
    console.log(newArray.num);
    const pickle = newArray.createArray();
    console.log(pickle);
    expect(pickle).toEqual([2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  });
});

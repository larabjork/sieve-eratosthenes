import { Sieve } from './../src/project.js';

describe ('Sieve', () => {
  let fullArray;
  let newArray;

  beforeEach(() => {
    newArray = new Sieve(15);
    fullArray = newArray.createArray();
    console.log(fullArray);
    expect(fullArray).toEqual([2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  });

  test('should remove all multiples of 2 from initial array', () => {
    potato = fullArray.removeEvens();
    expect(potato).toEqual([2,3,5,7,9,11,13,15]);
  });


});

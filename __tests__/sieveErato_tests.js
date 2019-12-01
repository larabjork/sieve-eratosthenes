import { Sieve } from './../src/project.js';

describe ('Sieve', () => {
  let fullArray;

  beforeEach(() => {
    const newArray = new Sieve(15);
    const fullArray = newArray.createArray();
    console.log(fullArray);
    expect(fullArray).toEqual([2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  });

  test('should show that beforeEach works to create array from 2 through number inputted by user', () => {
    console.log(fullArray);
  });

  // test('should remove all multiples of 2 from initial array', () => {
  //   const noEvensArray = new Sieve(15);
  //   const potato = noEvensArray.removeNonprime();
  //   console.log(potato);
  //   expect(potato).toEqual([2,3,5,7,9,11,13,15]);
  // });


});

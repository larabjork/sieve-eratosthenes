import { Sieve } from './../src/project.js';

describe ('Sieve', () => {

  test('should create an array starting with 2 and ending with number entered by user', () => {
    const newArray = new Sieve(15);
    expect(newArray.createArray).isArray(true);
  });
});

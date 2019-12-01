export class Sieve {
  constructor(num) {
    this.num = num;
    this.primeArray = [];
    this.initialArray= [];
  }

  createArray() {
    for (let i = 2; i <=num; i+= 1) {
      this.initialArray.push(i);
      let numArray = this.initialArray;
      return numArray;
    };
  }


}

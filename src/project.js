export class Sieve {
  constructor(num) {
    this.num = num;
    this.primeArray = [];
    this.initialArray= [];
  }

  createArray() {
    for (let i = 2; i <=this.num; i+= 1) {
      this.initialArray.push(i);
    };
    return this.initialArray;
  }

  removeNonprime() {
    this.initialArray.forEach(function(num){
      if (num % 2 !==0) {
        this.primeArray.push(num);
      } else {};
    });
  }




}

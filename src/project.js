export class Sieve {
  constructor(num) {
    this.num = num;
    this.primeArray = [];
    this.initialArray= [];
    this.discardArray = [];
  }

  createArray() {
    for (let i = 2; i <=this.num; i+= 1) {
      this.initialArray.push(i);
    };
    return this.initialArray;
  };

  removeEvens() {
    this.initialArray.forEach(function(j){
      if (j === 2) {
        this.primeArray.push(j);
      return this.primeArray;
      } else if (j % 2 === 0){
        this.discardArray.push(j);
      } else {}
    });
  };




}

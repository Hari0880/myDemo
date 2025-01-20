
const symbol1 = Symbol('uniqueKey');
const symbol2 = Symbol('uniqueKey');

const myObject = {
  [symbol1]: 'Value for symbol1',
  [symbol2]: 'Value for symbol2',
};

console.log(myObject[symbol1]); 
console.log(myObject[symbol2]);


console.log(symbol1 === symbol2);

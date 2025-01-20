
const globalSymbol1 = Symbol.for('myKey');
const globalSymbol2 = Symbol.for('myKey');


const retrievedSymbol1 = Symbol.for('myKey');
const retrievedSymbol2 = Symbol.for('myKey');


console.log(globalSymbol1 === globalSymbol2); 
console.log(retrievedSymbol1 === retrievedSymbol2); 


console.log(globalSymbol1 === retrievedSymbol1);
console.log(globalSymbol2 === retrievedSymbol2); 


const uniqueSymbol1 = Symbol('myUniqueKey');
const uniqueSymbol2 = Symbol('myUniqueKey');
console.log(uniqueSymbol1 === uniqueSymbol2);

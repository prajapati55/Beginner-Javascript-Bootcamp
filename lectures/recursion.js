/**
 * Recursion 
 * function which called himself repeatedly
 */

function printNumber(number){
 console.log(number);
 if(number==1){
     return;
 }

  printNumber(number-1)
}
printNumber(7);

/**
 * print factorial using recursion
 */

const factorial = (num) => {
    if(num===1) {
      return num;
    }
    return num * factorial(num-1);
}

console.log("factorial",factorial(6))
/**
 * The Fibonacci Sequence is the sum of previous two numbers
 *  1, 1, 2, 3, 5, 8, 13, 21,34
 * Write a JavaScript program to get the first n Fibonacci numbers
 */
//print nth fibonacci number
const fibo = (num) => {
     if(num < 2) {
        return num
    }
    return fibo(num-1)+fibo(num-2)
}
const fibSer = fibo(8);
console.log("fibSer", fibSer);
// let fibArr = [0,1];
// const printFiboSeries = (num) => {
//  if(num===1){
//      return fibArr.toString();
//  }
//  let len = fibArr.length;
//  let newNum = fibArr[len-1]+fibArr[len-2];
//  fibArr.push(newNum)
//  return printFiboSeries(num-1);
// }
// console.log("printFiboSeries", printFiboSeries(10))
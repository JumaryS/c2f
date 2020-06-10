/*******************************************************************************
 * Your code here!
 ******************************************************************************/

function cToF(num){
let cel= process.argv[2] 
let fer= (cel * 9/5) + 32
// console.log(num)
console.log(cel, 'in C', "is", fer, "in F")
}
cToF()


// function input(num){
//   let celsius = num* 9/5 + 32
//   console.log(num *celsius)
//   return num * celsius
// }
// input(10)



// let input1 = 0
// let cel= input1 * 9/5 +32
// let outPut = input(0) + cel
// console.log(input1 + ' ' +'converted to F is ' + outPut)



// let input2 = 100
// let cel1= input2 * 9/5 +32
// let outPut1 = input(100) 
// console.log(input2 + ' ' + 'converted to F is ' + outPut1)

// let input3 = 5
// let cel3= input3 *9/5 +32
//  let outPut3 = input(5) 
// console.log(input3 + " "  +'converted to F is ' + outPut3)





/*******************************************************************************
  The below helper function will return an argument the user used when launching
  the app.

  It takes a number as a parameter and returns the argument with that index, as
  a string.

  If no argument with that index exists, undefined will be returned.

  The indices are not the indices of a string, with each character its own
  individual string.
  Instead, each space-separated word is its own index.

  See the following diagram of indices for an example:

  input: node main.js help what is 32 * 9 please
  indices:             0    1   2  3  4 5   6

  So if the user typed in `node main.js 47 times 5`, then the following calls
  to `getInput` would result in the following outputs:

  getInput(0) // -> '47'
  getInput(1) // -> 'times'
  getInput(2) // -> '5'
  getInput(3) // -> undefined

  For most apps, you will need multiple inputs from the user, but for this 
  first one, getInput(0) should be all you need.
 ******************************************************************************************/

function getInput1(n) {
  return process.argv[n +2];
}
console.log(getInput1())
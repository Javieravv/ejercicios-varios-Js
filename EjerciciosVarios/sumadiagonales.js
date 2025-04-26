import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

console.log('Suma de las diagonales de una matriz')

function diagonalDifference(arr) {
  // Write your code here
  let primaryDiagonal = 0, secondaryDiagonal = 0, lengthArr = arr.length;
  // primary diagonal
  for (let i = 0; i < lengthArr; i++) {
    primaryDiagonal += arr[i][i]
    secondaryDiagonal += arr[i][lengthArr - 1 - i]
  }
  
  return Math.abs(primaryDiagonal - secondaryDiagonal);
}

const arregloMultiple = [
  [1,2,25],
  [5,-15,7],
  [10,11,12]
]

console.log (arregloMultiple);
console.log (arregloMultiple.length, arregloMultiple[0].length)

console.log(diagonalDifference(arregloMultiple))
let c = 2 / 5;
console.log('Resultado de C es ', parseFloat(c.toFixed(6)))
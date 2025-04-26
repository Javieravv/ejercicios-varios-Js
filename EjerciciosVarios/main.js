import './style.css'

console.log('Funciones recursivas')

const countDown = (fromNumber) => {
  for (let i = fromNumber; i > 0; i--) {
    console.log(i)   
  }
}

const countDownRecursive = (fromNumber) => {
  console.log(fromNumber)
  if (fromNumber > 0) {
    countDownRecursive (fromNumber - 1)
  }
}

const sumNumber = (number) => {
  if (number <= 0) {return number}
  console.log (number)
  return number + sumNumber (number - 1)
}


const NUMBER = 5;

// countDown(NUMBER);
// countDownRecursive (NUMBER)
const sum = sumNumber(NUMBER)
console.table('Resultado de la suma', sum)
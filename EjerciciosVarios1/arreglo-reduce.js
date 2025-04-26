console.log('Arreglos. Array Reduce')

const arreglo = [0,4, 8, 0, 15, -5, -3, -8, 15, 25, 0, -1, 450, 25, -250, 0, -156, 3, -8]

console.log(arreglo)

const arrReduce = arreglo.reduce((prevVal, currentVal) => {
    console.log(currentVal)
    return prevVal + currentVal
}, 0)

console.log('EL TOTAL ES', arrReduce)

const arrReduce1 = arreglo.reduce((prevVal, currentVal) => {
    (currentVal > 0) ? prevVal.mayorCero++
        : (currentVal === 0) ? prevVal.igualCero++ : prevVal.menorCero++;
    return prevVal;
}, {
    mayorCero: 0,
    menorCero: 0,
    igualCero: 0
})

console.log(arrReduce1);

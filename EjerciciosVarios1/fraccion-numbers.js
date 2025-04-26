console.log('Fracciones de números.')

const arreglo = [0,4, 8, 0, 15, -5, -3, -8, 15, 25, 0, -1, 450, 25, -250, 0, -156, 3, -8]

const plusMinus = (arr) => {
    const plusMinus = arr.reduce((prevVal, currentVal) => {
        (currentVal > 0) ? prevVal.mayorCero++
            : (currentVal === 0) ? prevVal.igualCero++ : prevVal.menorCero++;
        return prevVal;
    }, {
        mayorCero: 0,
        menorCero: 0,
        igualCero: 0
    })
    console.log ((plusMinus.mayorCero / arr.length).toFixed(6))
    console.log ((plusMinus.menorCero / arr.length).toFixed(6))
    console.log ((plusMinus.igualCero / arr.length).toFixed(6))
}

plusMinus (arreglo);
console.log('Min-Max sum')
console.log('Dados cinco números enteros positivos, encuentre los valores mínimo y máximo que se pueden calcular sumando exactamente cuatro de los cinco números enteros. Luego imprima los valores mínimo y máximo respectivos como una sola línea de dos enteros largos separados por espacios.')

const miniMaxSum = (arr) => {
    const sums = arr.reduce((prevVal, currentVal, index) => {
        let totSum = 0;
        for (let i = 0; i < arr.length; i++) {
            (i !== index) ? totSum += arr[i] : totSum
        }
        prevVal.push(totSum)
        return prevVal;
    }, [])
    console.log (Math.min(...sums), Math.max(...sums) )
}

const arrNumbers = [11,35,45,10,80, 65]

miniMaxSum(arrNumbers)
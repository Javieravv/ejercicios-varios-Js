console.clear()
console.log("Usar async/await con funciones de orden superior")

const asyncFilter = async(arr, predicate) => {
    const results = await Promise.all(arr.map(predicate))
    console.log('VALOR DE RESULTS', results)
    return arr.filter((_value, index) => results[index])
}

const delay = (ms) => new Promise(res => setTimeout(res, ms));


const isOddNumber = async (n) => {
    await delay(50)
    return n % 2 !== 0
}

const isPeerNumber = async (n) => {
    await delay(50)
    return n % 2 === 0
}

const filterPeerNumbers = async(numbers) => {
    return asyncFilter(numbers, isPeerNumber)
}

const filterOddNumbers = async(numbers) => {
    return asyncFilter (numbers, isOddNumber)
}

const arregloNumeros = [1,2,3,4,5,6,7,8,9,0,11, 111, 256, 145, 300, 15, -5]

filterOddNumbers( arregloNumeros).then(console.log)
filterPeerNumbers(arregloNumeros).then(console.log)
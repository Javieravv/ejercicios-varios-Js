console.clear()
console.log("Ejercicios de práctica de arreglos")

// console.log('Primera práctica: arguments')

// const arr1 = {
//     nombre: 'Javo',
//     apellido: 'Vargas'
// }

// var argArray = Array.prototype.slice.call(arr1)
// console.log(arr1)
// console.log(argArray)

console.log('Segunda práctica: Sumar valores de un arreglo')

var numbers = [4,8,12,15,18,32,-5,51]

var sum = numbers.reduce( ( x, y ) => x + y, 0)
console.log(numbers)
console.log('Resultado final: ', sum, '\n')

console.log('Tercera práctica: Condicionales cortos \n')

const hungry = true

hungry && console.log('Sí tengo hambre')

// Cuarta práctica

const func = (arg1) => {
    let arg2 = arg1 || 1650
    return arg2
}

console.log('Valor devuelto por la función', func(365))

// Quinta práctica: Operador coma (,)

let javo = 51
console.log('Mi javo es ', javo)

javo = (javo++, javo)
console.log('Mi javo es ', javo)
javo = (5, 6, 9)
console.log('Mi javo nuevo es ', javo)

// Sexta práctica: redimensionar arreglo usando length

var frutas = ['A','B','C','D','E','F']
console.log('frutas = ', frutas, ' Longitud = ',  frutas.length)
frutas.length = 2
console.log('frutas = ', frutas, ' Longitud = ',  frutas.length)
frutas.length = 0
console.log('frutas = ', frutas, ' Longitud = ',  frutas.length)

// Séptima práctica: desestructurar valores a través de matrices

// let vara = 'Alemania', varb = 'Bolivia';
// console.log(vara, varb)
// [varc, vard] = [vara, varb]
// console.log(varc, vard)

// Octava prácticar: mezclar aleatoriamente elementos en una matriz

console.log('Desordenar valores arreglos  \n')
var ciudades = ['Bogotá','Quito','Ecuador','Caracas','Brasilia','México DC','Ohio','La Habana','Estambul', 'Medellín']
console.log(ciudades)

console.log(ciudades.sort( () => {
    return Math.random() - 0.5
}))

console.log('CIUDADES DESORDENADAS: ',ciudades)

// Novena: propiedades dinámicas a un objeto

const dynamic = 'edad'
const dynamic1 = 'sexo'
const dynamic2 = 'ciudadOrigen'

var item = {
    nombre: 'Javo',
    apellido: 'Vargas',
    [dynamic]: 51,
    [dynamic1]: 'Masculino'
}
console.log(item)

// Borramos una propiedad de ese objeto
delete item.sexo
console.log(item)

item = {
    ...item,
    [dynamic2]: 'Tunja'
}

console.log(item)


// Décima: filtrar únicos valores

const myNumbers = [4,1,5,4,1,6,1,7,5,8,9,0,0,4]
console.log('Mis números: ', myNumbers)
const myUniqueNumbers = [ ...new Set(myNumbers)]
console.log('Mis números únicos: ', myUniqueNumbers.sort())

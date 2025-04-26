console.log('birthday cake candles')

// You are in charge of the cake for a child's birthday. 
// You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. 
// Count how many candles are tallest.

const birthdayCakeCandles = (candles) => {
    let tallSeill = Math.max(...candles);
    const totCandleSeill = candles.reduce((acc, cand) => {
        if (cand === tallSeill) { acc++ }
        return acc
    }, 0);
    return totCandleSeill
}

const arrCandles = [3,2,1,3,3]

console.log (birthdayCakeCandles (arrCandles))
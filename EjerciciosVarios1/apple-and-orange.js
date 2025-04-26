console.clear()
console.log('Apples and Oranges')


/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s  starting point of Sam's house location.
 *  2. INTEGER t  ending location of Sam's house location.
 *  3. INTEGER a  location of the Apple tree.
 *  4. INTEGER b  location of the Orange tree.
 *  5. INTEGER_ARRAY apples  distances at which each apple falls from the tree.
 *  6. INTEGER_ARRAY oranges distances at which each orange falls from the tree.
 */

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    const disApples = apples.map(apple => apple + a)
        .reduce((acc, apple) => {
            console.log ('apple', apple, s, t)
            if (apple >= s && apple <= t) { acc++ }
            return acc;
        }, 0)

    const distOranges = oranges.map(orange => orange + b)
        .reduce((acc, orange) => {
            console.log ('orange', orange, s, t)

            if (orange >= s && orange <= t) { acc++ }
            return acc;
        }, 0)

    // console.log(disApples, distOranges)
    console.log(disApples)
    console.log(distOranges)

}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])
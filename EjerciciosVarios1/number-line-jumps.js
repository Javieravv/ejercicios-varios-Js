console.clear()
console.log('Number Line Jumps')

/*
You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location  and moves at a rate of  meters per jump.
The second kangaroo starts at location  and moves at a rate of  meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

Example

After one jump, they are both at , (, ), so the answer is YES. */

/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1 inicio canguro 1
 *  2. INTEGER v1 salto canguro 1
 *  3. INTEGER x2 inicio canguro 2
 *  4. INTEGER v2 salto canguro 2
 */

function kangaroo(x1, v1, x2, v2) {
    // let resp = 'YES';
    // if (x1 < x2 && v1 <= v2) {
    //     resp = 'NO'
    // } if (v1 > v2) {
    //     if (x1 + v1 > 10000 || x2 + v2 > 10000) {
    //        resp = 'YES'
    //     } else {
    //         while (x1 < x2 && (x1 <= 100000 || x2 <= 100000)) {
    //             x1 += v1;
    //             x2 += v2
    //             if (x1 === x2) { 
    //                 console.log('YES ,x1,x2', x1, x2)
    //                 resp = 'YES' 
    //             } else {
    //                 console.log('NO ,x1,x2', x1, x2)
    //                 resp = 'NO'
    //             }
    //         }
    //     }
    // }
    // return resp;

    return (v1 > v2) && ((x2 - x1) % (v1 - v2) === 0) ? "YES" : "NO";
}

const maximoComunDivisor = (a, b) => {
    let temporal; //Para no perder b
    while (b !== 0) {
        temporal = b;
        console.log('a % b', a, b)
        b = a % b;
        a = temporal;
    }
    console.log('Valor de a= ', a)
    return a;
};

const mcm = (a, b) => {
    // https://parzibyte.me/blog
    return (a * b) / maximoComunDivisor(a, b);
};


// console.log(kangaroo(2, 1, 1, 2))
// console.log(kangaroo(0, 3, 4, 2))
// console.log(kangaroo(0, 2, 5, 3))
// console.log(kangaroo(0, 2, 0, 3))
// console.log(kangaroo(0, 3, 0, 3))
// console.log(kangaroo(21, 6, 47, 3))
// console.log(kangaroo(63,8,94,3))
// console.log(kangaroo(28, 8, 96, 2))
// console.log(kangaroo(45, 7, 56, 2))
// console.log(kangaroo(63, 8, 94, 3))
// console.log(kangaroo(43, 2, 70, 2))
// console.log(kangaroo(1571, 4240, 9023, 4234))
// console.log(kangaroo(7271, 2211, 7915, 2050))
// console.log(kangaroo(6644, 5868, 8349, 3477))
// console.log(kangaroo(2081, 8403, 9107, 8400))
// console.log(kangaroo(2932, 7030, 9106, 4840))
// console.log(kangaroo(1113, 612, 1331, 610))
// console.log(kangaroo(1817, 9931, 8417, 190))
// console.log(kangaroo(288, 9679, 9653, 99))
// console.log(kangaroo(2564, 5393, 5121, 2836))
// console.log(kangaroo(4523, 8092, 9419, 8076))
console.log(kangaroo(1928, 4306, 5763, 4301))
// console.log(kangaroo(1113, 612, 1331, 610))
// console.log(kangaroo(4602, 8519, 7585, 8362))
// console.log(kangaroo(2081, 8403, 9107, 8400))

// 11 - 21 - 25 - 26 -27- 28 -29




// console.log(kangaroo(4181, 3976, 6312, 988))

// console.log (mcm (3,2))
// console.log (mcm (4181+3976,6312+988))
// console.log (mcm (35, 49))


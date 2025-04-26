console.log ('Staircase.')

const staricase = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i)+'#'.repeat(i))
    }
}

//' '.repeat(n - 1)+
staricase(20)


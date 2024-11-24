const createMagicPotion = (potions, target)  => {
    let res = []
    for (let i = 0; i < potions.length - 1; i++) {
      for (let j = i+1; j < potions.length; j++) {
        if (potions[i] + potions[j] === target) {
          res.push([i, j])
        }
      }
    }
    
    if (res.length === 0) return undefined
  
    if (res.length === 1) return res[0]
  
    let option = res[0]
    if (res.length > 1) {
      for (let x = 1; x < res.length; x++) {
        if (res[x][1] < option[1]) {
          option = res[x]
        }
      }
    }
    return option
  }
  
  
  const potions = [13,5,6,2]
  const goal = 8
  
  const result = createMagicPotion(potions, goal) // [2, 3]
  console.log('Resultado',result)
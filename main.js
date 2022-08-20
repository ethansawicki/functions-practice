const buyClay = () => {
   const clay = {}
   return clay
}

const makePottery = (pottery) => {
    pottery.shape = "Bowl"
    return pottery
}

const bisqueFire = (fire) => {
    fire.readyForGlazing = true
    return fire
}

const glazePottery = (glaze) => {
    if(glaze.readyForGlazing === true) {
        glaze.glazing = "Midnight Blue"
        return glaze
    }
}

const finalFiring = (pottery, temp) => {
    if(temp > 1200) {
        pottery.temp = temp
        pottery.cracked = true
        return pottery
    } else {
        pottery.temp = temp
        pottery.cracked = false
        return pottery
    }
}

const firePottery = () => {
    const clay = buyClay()
    const pottery = makePottery(clay)
    const bisque = bisqueFire(pottery)
    const glaze = glazePottery(bisque)
    const finalProduct = finalFiring(glaze, 1200)
    return finalProduct
}


console.log(firePottery())
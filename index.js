
function wakeDog(dogName, dogBreed) {
    const retString = `Wake ${dogName} the ${dogBreed}`
    console.log(retString)
    return retString
}

function leashDog(dogName, dogBreed) {
    const retString = `Leash ${dogName} the ${dogBreed}`
    console.log(retString)
    return retString
}

function walkToPark(dogName, dogBreed) {
    const retString = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(retString)
    return retString
}

function throwFrisbee(dogName, dogBreed) {
    const retString = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(retString)
    return retString
}

function walkHome(dogName, dogBreed) {
    const retString = `Walk home with ${dogName} the ${dogBreed}`
    console.log(retString)
    return retString
}

function unleashDog(dogName, dogBreed) {
    const retString = `Unleash ${dogName} the ${dogBreed}`
    console.log(retString)
    return retString
}

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]
    
function exerciseDog(dogName, dogBreed) {
    let returnArray = []
    for (const el of routine) {
        returnArray.push(el(dogName, dogBreed))
    }
    return returnArray
}

console.log(exerciseDog("Honey", "Golden"))
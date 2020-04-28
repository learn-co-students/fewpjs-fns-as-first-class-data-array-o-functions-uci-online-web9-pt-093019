function printAndReturn(message) {
    console.log(message)
    return message 
}

function wakeDog(dogName, dogBreed) {
    const message = `Wake ${dogName} the ${dogBreed}`
    return printAndReturn(message)
}
function leashDog(dogName, dogBreed) {
    const message = `Leash ${dogName} the ${dogBreed}`
    return printAndReturn(message)
}
function walkToPark(dogName, dogBreed) {
    const message = `Walk to the park with ${dogName} the ${dogBreed}`
    return printAndReturn(message)
}
function throwFrisbee(dogName, dogBreed) {
    const message = `Throw the frisbee for ${dogName} the ${dogBreed}`
    return printAndReturn(message)
}
function walkHome(dogName, dogBreed) {
    const message = `Walk home with ${dogName} the ${dogBreed}`
    return printAndReturn(message)
}
function unleashDog(dogName, dogBreed) {
    const message = `Unleash ${dogName} the ${dogBreed}`
    return printAndReturn(message)
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let newArray = []
    for (let i=0; i < routine.length; i++) {
        newArray.push(routine[i](dogName, dogBreed))
    }
    return newArray
}
const wakeDog = function wakeDog(name, breed) {
    const string = `Wake ${name} the ${breed}`;
    console.log(string);
    return string;
};
const leashDog = function leashDog(name, breed) {
    const string = `Leash ${name} the ${breed}`;
    console.log(string);
    return string;
};
const walkToPark = function walkToPark(name, breed) {
    const string = `Walk to the park with ${name} the ${breed}`;
    console.log(string);
    return string;
};
const throwFrisbee = function throwFrisbee(name, breed) {
    const string = `Throw the frisbee for ${name} the ${breed}`;
    console.log(string);
    return string;
};
const walkHome = function walkHome(name, breed) {
    const string = `Walk home with ${name} the ${breed}`;
    console.log(string);
    return string;
};
const unleashDog = function unleashDog(name, breed) {
    const string = `Unleash ${name} the ${breed}`;
    console.log(string);
    return string;
};

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog,
];

function exerciseDog(name, dog) {
    let array = [];
    for (let i = 0; i < routine.length; i++) {
        array.push(routine[i](name, dog));
    }
    return array;
};
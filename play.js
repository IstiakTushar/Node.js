// Play with Basics

// Variables - var, let, const
// Next gen JavaScript use let
// var & let are similer
// const contain fixed values & it must have a value

const name = 'Max';
let age = 26;
const hasHobbies = true;

age = 30;

// ARROW FUNCTION => Also called ANONYMOUS FUNCTION BECSUSE IS'S HAVE NO NAME
const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is ' + userName + ', age is ' + userAge + ' and user has hobbies: ' + userHasHobby);
};

// Output
console.log(summarizeUser(name, age, hasHobbies));

// Named Function Shortcut
// IF we need to return only one statement we can write it as one line
// const add = (a, b) => a + b;

// const addOne = a => a + 1;

// IF We have no argument then we have specify the ()
// const addRandom = () => 1 + 2;


// Output
// console.log(add(2, 2));
// console.log(addOne(1));
// console.log(addRandom());


// Working with Objects & Methods
const person = {
    name: 'Istiak',
    age: 26,
    greet() {
        console.log('Hi I am ' + this.name)
    }
};

const copiedPerson = { ...person };
console.log(copiedPerson);

// Output
// person.greet();

// Arrays & Arrays Method
const hobbies = ['Music', 'Books', 'Programming', 'Movies', 'Cooking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }


// Output
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);


// Arrays Object Reference Type
hobbies.push('Learning');


// Understanding Spread Rest Operator
const copiedArray = [...hobbies];

// Output
console.log(copiedArray);

const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4));

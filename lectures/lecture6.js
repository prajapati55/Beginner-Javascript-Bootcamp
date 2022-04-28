// ES-6  newly introduces functions 
/**
   1. let, const
   2. destructuring
   3. spread & rest operator
   4. filter, map, reduce, flat
   5. arrow functions 
   6. default parameters
 * 
 */
// destructuring
const person = {
    name: "Kumar",
    age: 34,
    hobby: "watching cinema"
}

// const name = person.name;
// const age = person.age;
// const { name, age, address } = person;


// console.log(name)
// console.log(age)
// console.log(address)

//Spread and rest
// symbol: ...

// const newPerson = person;
// console.log("newPerson", newPerson)
// console.log("person", person)
// newPerson.name = "Sharma"
// console.log("newPerson", newPerson)
// console.log("person", person)

const newPerson = { ...person, address: "something" };
// newPerson.name = "Khan"
// console.log("newPerson", newPerson)
// console.log("person", person)

/// Rest operator
const { age, ...otherProps } = newPerson;

console.log("age", age)
console.log("otherProps", otherProps)

//filter, map
let cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
    },
    {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
    },
    {
        "color": "brown",
        "type": "Ford",
        "registration": new Date('2018-03-03'),
        "capacity": 7
    },
    {
        "color": "gray",
        "type": "Thar",
        "registration": new Date('2018-03-03'),
        "capacity": 6
    }
]


// const filteredCars = cars.filter((car) => {
//     return car.capacity == 9
// })
// H.w. => find method
// const filteredCars = cars.filter((car) => car.capacity == 5)
// console.log("filteredCars")
// console.log(filteredCars)


//iteration using for of loop
// for (let car of cars) {
//     console.log("car-color", car.color)
// }

// for (let prop in newPerson) {
//     // console.log("newPerson props", prop)
//     console.log("newPerson props", newPerson[prop])
// }

// find
// const array1 = [11, 5, 12, 8, 130, 44];
// const found = array1.find(element => element > 135);
// console.log(found);

// map 
// const capacityArr = cars.map((car) => car.capacity);
// console.log("capacityArr", capacityArr)
// const modifiedArr = cars.map((car) => {
//     return {
//         ...car,
//         speed: 2 * car.capacity
//     }
// });

// const modifiedArr = cars.map(({ type, capacity, color }) => {
//     return {
//         type: type,
//         capacity: capacity,
//     }
// });

// const modifiedArr = cars.map(({ type, capacity, color }) => {
//     return {
//         type,
//         capacity,
//         color
//     }
// });

// console.log("modifiedArr", modifiedArr)

// reduce method
// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const sum = array1.reduce((sum, value) => {
//     return sum - value;
// }, 0);

// console.log("sum", sum);


// const numbers = [100, 100, 50, 20];
// const totalNum = numbers.reduce(myFunc);

// function myFunc(total, num) {
//     return total - num;
// }
// // //0-175 = -175
// console.log("totalNum", totalNum)
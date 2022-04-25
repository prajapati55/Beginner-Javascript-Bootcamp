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

const newPerson = { ...person, address: "somethig" };
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
// find H.W.
const filteredCars = cars.filter((car) => car.capacity == 5)
console.log("filteredCars")
console.log(filteredCars)

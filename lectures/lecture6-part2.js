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


const filteredCars = cars.filter((car) => car.capacity == 6)

console.log(filteredCars)
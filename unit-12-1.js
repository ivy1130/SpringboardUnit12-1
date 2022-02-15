// Part One
class Vehicle {
	constructor (make, model, year) {
		this.make = make
		this.model = model
		this.year = year
	}
	honk () {
		return 'Beep'
	}
	toString () {
		const {make, model, year} = this
		return `The vehicle is a ${make} ${model} from ${year}.`
	}
}

// Part Two
class Car extends Vehicle {
	constructor (make, model, year) {
		super(make, model, year)
		this.numWheels = 4
	}
}

// Part Three
class Motorcycle extends Vehicle {
	constructor (make, model, year) {
		super(make, model, year)
		this.numWheels = 2
	}
	revEngine () {
		return 'VROOM!!!'
	}
}

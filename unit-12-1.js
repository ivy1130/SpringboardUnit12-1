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

// Part Four
class Garage {
	constructor (capacLimit) {
		this.vehicles = []
		this.capac = 0
		this.capacLimit = capacLimit
	}
	add (vehicle) {
		const {vehicles, capacLimit} = this
		let {capac} = this
		if (vehicle instanceof Vehicle) {
			if (capac < capacLimit) {
				vehicles.push(vehicle)
				this.capac++ //why won't using capac++ work here? Wouldn't capac === this.capac?
				return 'Vehicle added!'
			}
			return 'Sorry, we are full.'
		} else {
			return 'Only vehicles are allowed in here!'
		}
	}
}

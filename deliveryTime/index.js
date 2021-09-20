//this file is the entry point for scheduling/getting delivery times for each package

const makeShipmentBatches = require('./makeShipmentBatches.js')
const scheduleShipments = require("./scheduleShipments.js")
const sortPackagesByWeight = require('./sortPackagesByWeight.js')
const arrangeSchedule = require("./arrangeSchedule.js")

const findDeliveryTimes = (input) => {

	//declaring values by parsing input
	const standards = (input.standards).split(" ")
	const numberOfPkgs = standards[1]
	const numberOfVehicles = parseInt(standards[2])
	const speed = standards[3]
	const maxCapacity = parseInt(standards[4])

	const packageObjects = []; //array contianing all packages in JS object form
	const packageObjectsCopy = [] //to get around reference by value

	//making objects for each package from input--structure {id, weight, timeTaken}
	input.packages.forEach((pkg) => {
		const packageDetails = pkg.split(" ")
		const tempObject = {id: packageDetails[0],
							weight: parseInt(packageDetails[1]),
							timeTaken: Math.floor((parseInt(packageDetails[2])/speed)*100)/100 // distance/speed
						}

		packageObjects.push(tempObject)
		packageObjectsCopy.push(tempObject)
	})

	//sorting objects array by weight, maximizes shipment weight while making batches
	packageObjects.sort(sortPackagesByWeight)
	packageObjectsCopy.sort(sortPackagesByWeight)
		
	const shipmentBatches = makeShipmentBatches(packageObjects, maxCapacity) //function to make batches of shipment, each batch contains maximum weight

	const schedule = scheduleShipments(packageObjectsCopy, shipmentBatches, numberOfVehicles)

	//sorting schedule by package Id to match input
	schedule.sort(arrangeSchedule)
	console.log(schedule)

	return schedule
}

module.exports = findDeliveryTimes;
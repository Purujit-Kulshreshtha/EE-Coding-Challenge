const makeShipmentBatches = require('./makeShipmentBatches.js')
const sortPackagesByWeight = require('./sortPackagesByWeight.js')
const scheduleShipments = require("./scheduleShipments.js")

const findDeliveryTimes = (input) => {

	const standards = (input.standards).split(" ")
	const numberOfPkgs = standards[1]
	const numberOfVehicles = parseInt(standards[2])
	const speed = standards[3]
	const maxCapacity = parseInt(standards[4])

	const packageObjects = []; //array contianing all packages in JS object form
	const packageObjectsCopy = [] //to get around reference by value

	//making objects from input
	input.packages.forEach((pkg) => {
		const packageDetails = pkg.split(" ")
		const tempObject = {id: packageDetails[0],
							weight: parseInt(packageDetails[1]),
							timeTaken: Math.floor((parseInt(packageDetails[2])/speed)*100)/100
						}

		packageObjects.push(tempObject)
		packageObjectsCopy.push(tempObject)
	})

	
	packageObjects.sort(sortPackagesByWeight)
	packageObjectsCopy.sort(sortPackagesByWeight)


		
	const shipmentBatches = makeShipmentBatches(packageObjects, maxCapacity) //function to make batches of shipment, each batch contains maximum weight

	const schedule = scheduleShipments(packageObjectsCopy, shipmentBatches, numberOfVehicles)

	//function to rearrage schedule by package Id.
	const arrangeSchedule = (a, b) => {
		let id1 = a.split(" ")[0]
		let idNumber1 = id1[id1.length-1]

		let id2 = b.split(" ")[0]
		let idNumber2 = id2[id2.length-1]

		if (id1 > id2){
			return 1
		}
		if (id2 > id1){
			return -1
		}
		return 0
	}

	schedule.sort(arrangeSchedule)
	console.log(schedule)

	return schedule
}

module.exports = findDeliveryTimes;
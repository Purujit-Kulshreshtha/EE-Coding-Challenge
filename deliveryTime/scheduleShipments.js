const scheduleShipments = (packageObjects, shipmentBatches, numberOfVehicles) => {
	const schedule = [] //final schedule array

	const returnTimes = [] //return times of vehicles
	let minReturnTime = 0; //to check when a vehicle will next be available

	//lopping over each batch
	shipmentBatches.forEach(shipment => {

		//declaring values by parsing input
		let packages = shipment[0]
		let weight = shipment[1]

		//sets minReturnTime to return time of vehicle that will return first
		if (returnTimes.length === numberOfVehicles){
					minReturnTime = Math.min.apply(Math, returnTimes)
					let index = returnTimes.findIndex(time => time === minReturnTime)
					returnTimes.splice(index, 1)
				}
		
		let currentShipmentTimes = [] //contains delivery time for EACH PACKAGE in the current batch

		//looping over each package in current batch
		packages.forEach(id => {
			let index = packageObjects.findIndex(item => item.id === id) 

			//dealing with invalid input
			let currentPackageWeight = packageObjects[index].weight
			let currentPackageDistance = packageObjects[index].distance

			if (currentPackageWeight < 1 || currentPackageDistance < 1){
				schedule.push(`${id} Invalid input.`)
			} else {
				let currentPackageTime = (packageObjects[index].timeTaken + minReturnTime) //delivery time of current package, including vehicle return time

				currentPackageTime = parseFloat(currentPackageTime.toFixed(2)) //to get only two decimal places

				currentShipmentTimes.push(currentPackageTime) //to be used to calculate limiting factor of vehicle return time for each shipment

				const deliveryTimeData = `${id} ${currentPackageTime}`
				schedule.push(deliveryTimeData)

			}
		})

		//adding all vehicle return times to returnTimes array
		let maxCurrentShipmentTime = Math.max.apply(Math, currentShipmentTimes)
		returnTimes.push(maxCurrentShipmentTime*2)

	})

	return schedule
}

module.exports = scheduleShipments
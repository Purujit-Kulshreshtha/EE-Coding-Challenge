const scheduleShipments = (packageObjects, shipmentBatches, numberOfVehicles) => {
	const schedule = []


	const returnTimes = [] //return times of vehicles
	let minReturnTime = 0;	

	shipmentBatches.forEach(shipment => {
		let packages = shipment[0]
		let weight = shipment[1]

		if (returnTimes.length === numberOfVehicles){
					minReturnTime = Math.min.apply(Math, returnTimes)
					let index = returnTimes.findIndex(time => time === minReturnTime)
					returnTimes.splice(index, 1)
				}

		
		let currentShipmentTimes = []
		packages.forEach(id => {
			let index = packageObjects.findIndex(item => item.id === id)
			// let currentPackageTime = Math.floor((packageObjects[index].timeTaken + minReturnTime)*100)/100
			let currentPackageTime = (packageObjects[index].timeTaken + minReturnTime)
			currentPackageTime = parseFloat(currentPackageTime.toFixed(2))
			currentShipmentTimes.push(currentPackageTime)
			const deliveryTimeData = `${id} ${currentPackageTime}`
			schedule.push(deliveryTimeData)
		})

		let maxCurrentShipmentTime = Math.max.apply(Math, currentShipmentTimes)
		returnTimes.push(maxCurrentShipmentTime*2)

	})

	return schedule
}

module.exports = scheduleShipments
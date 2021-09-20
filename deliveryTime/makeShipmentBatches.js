const makeShipmentBatches = (packageObjects, maxCapacity) => {

	const shipmentBatches = [] //array containing batches of shipments

	const findMax = (packageObjects, maxCapacity) => {

		const remainingPackages = packageObjects.length

		if (remainingPackages === 1){
			let lastItemArray = [[packageObjects[0].id]]
			lastItemArray.push(packageObjects[0].weight)
			shipmentBatches.push(lastItemArray)
			packageObjects.splice(0, 1)
			return;
		}
		if (remainingPackages === 0){
			return;
		}

		let maxWeight = 0;
		let batch = "";
		let currentShipment;

		for (let i=0; i < remainingPackages; i ++){


			let curretWeight = 0;

			let currentPackage = packageObjects[i]

			let currentWeight = currentPackage.weight
			let currentShipment = currentPackage.id 

			for (let j=i+1; j < remainingPackages; j ++){


				//package that has potential of being added to current batch; to be decided by weight
				const potentialPackage = packageObjects[j]
				const potentialPackageWeight = potentialPackage.weight 

				if (currentWeight + potentialPackageWeight <= maxCapacity){
					currentWeight += potentialPackageWeight
					currentShipment += " " + potentialPackage.id
				}

				if (currentWeight > maxWeight){

					maxWeight = currentWeight
					batch = currentShipment
				}
			}
		}

		let assigned = batch.split(" ") //array to keep track of items that have already been assigned to a shipment
		
		//calculating maximum time of each shipment

		let shipment = [assigned, maxWeight]
		shipmentBatches.push(shipment)

		assigned.forEach((packageId) => {
			let index = packageObjects.findIndex(item => item.id === packageId)
			packageObjects.splice(index, 1)
		})

		findMax(packageObjects, maxCapacity)
	}

	findMax(packageObjects, maxCapacity)

	const arrangeByNumber = (a, b) => {
		if (a[0].length > b[0].length){
			return -1
		}
		if (b[0].length > a[0].length){
			return 1
		}
		return 0
	}

	const arrangeByWeight = (a, b) => {
		if (a[1] > b[1]){
			return -1
		}
		if (b[1] > a[1]){
			return 1
		}
		return 0
	}
	shipmentBatches.sort(arrangeByWeight)
	shipmentBatches.sort(arrangeByNumber)
	return shipmentBatches
}

module.exports = makeShipmentBatches
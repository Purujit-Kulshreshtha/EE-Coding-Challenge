const makeShipmentBatches = (packageObjects, maxCapacity) => {

	const shipmentBatches = [] //array containing batches of shipments

	//recursive function find most suitable batches and add to array
	const findMax = (packageObjects, maxCapacity) => {

		const remainingPackages = packageObjects.length

		//base cases
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

		//recursive case

		let maxWeight = 0; //maxweight, used for comparison 
		let batch = "";
		let currentShipment;

		//nested loop to combine separate packegs into suitable batches
		for (let i=0; i < remainingPackages; i ++){

			//values of currently selected package
			let curretWeight = 0;

			let currentPackage = packageObjects[i]

			let currentWeight = currentPackage.weight
			let currentShipment = currentPackage.id 

			for (let j=i+1; j < remainingPackages; j ++){ //taking j=i+1 ensures that program doesn't try to batch two packages multiple times


				//package that has potential of being added to current batch; to be decided by weight
				const potentialPackage = packageObjects[j]
				const potentialPackageWeight = potentialPackage.weight 

				//checks and adds if more another package can be added to current batch, based on weight
				if (currentWeight + potentialPackageWeight <= maxCapacity){
					currentWeight += potentialPackageWeight
					currentShipment += " " + potentialPackage.id
				}

				//checks and replaces if current batch is the most suitable batch
				if (currentWeight > maxWeight){
					maxWeight = currentWeight
					batch = currentShipment
				}
			}
		}

		let assigned = batch.split(" ") //array to keep track of items that have already been assigned to a shipment
		
		let shipment = [assigned, maxWeight]
		shipmentBatches.push(shipment)

		//removes already assigned packages from input inorder to make suitable recursive call
		assigned.forEach((packageId) => {
			let index = packageObjects.findIndex(item => item.id === packageId)
			packageObjects.splice(index, 1)
		})

		findMax(packageObjects, maxCapacity) //recursive call
	}

	findMax(packageObjects, maxCapacity)

	//sorting shipments by package number and weight to match shipment priority criteria
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
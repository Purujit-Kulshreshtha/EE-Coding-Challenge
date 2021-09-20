const findDeliveryCosts = require('./deliveryCost')
const findDeliveryTimes = require('./deliveryTime')

const main = (input) => {

	const deliveryCosts = findDeliveryCosts(input)
	const deliveryTimes = findDeliveryTimes(input) 

	let finalOutput = [];

	deliveryTimes.forEach(pkg => {
		let timeDetails = pkg.split(" ")
		packageId = timeDetails[0]
		packageTime = timeDetails[1]

		let indexOfPackageInCosts = deliveryCosts.findIndex(item => item.id === packageId)
		let costDetails = deliveryCosts[indexOfPackageInCosts]

		if (!costDetails){
			finalOutput.push("Invalid input.")
		} else{
			let finalPackageDetails = `${packageId} ${costDetails.discount} ${costDetails.totalCost} ${packageTime}`

			finalOutput.push(finalPackageDetails)
		}
	})
	
	return finalOutput

}

module.exports = main;
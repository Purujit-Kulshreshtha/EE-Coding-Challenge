const calculateCost = require('./calculateCost.js')

const findDeliveryCost = (input) => {

	const costs = []
	const standardsArray = input.standards.split(" ")
	const basePrice = parseInt(standardsArray[0])
	const numberOfPkgs = standardsArray[1]

	input.packages.map((pkg) => {
		costs.push(calculateCost(pkg, basePrice))
	})

	return costs
}

module.exports = findDeliveryCost;
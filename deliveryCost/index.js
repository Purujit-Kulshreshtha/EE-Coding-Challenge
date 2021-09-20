//this file is the entry point for caluclation of delivery cost

const calculateCost = require('./calculateCost.js')
const generateOfferTable = require('./generateOfferTable.js')
const fs = require('fs')

const findDeliveryCosts = (input) => {

	const offerTable = generateOfferTable()//generates offer table based on the critera in 'criteria.txt'. Allows to easily add, remove or change offer criteria.

	const costs = [] //output array

	//declaring values by parsing input
	const standardsArray = input.standards.split(" ") 
	const basePrice = parseInt(standardsArray[0])
	const numberOfPkgs = standardsArray[1]

	//itterativley calling calculate function on all input values
	input.packages.map((pkg) => {
		costs.push(calculateCost(pkg, basePrice, offerTable))
	})

	return costs
}

module.exports = findDeliveryCosts;
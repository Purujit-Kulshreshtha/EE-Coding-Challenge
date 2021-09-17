//this file is the entry point for caluclation of delivery cost

const calculateCost = require('./calculateCost.js')
const generateOfferTable = require('./generateOfferTable.js')
const fs = require('fs')

const findDeliveryCosts = (input) => {

	// generateOfferTable()

	//lookup table to be stored in a json file or text file to easily make changes
	const offerTable = {
		OFR001: {
			rate: 0.1,
			distanceLow: 0,
			distanceHigh: 200,
			weightLow: 70,
			weightHigh: 200 
		},
		OFR002: {
			rate: 0.07,
			distanceLow: 50,
			distanceHigh: 150,
			weightLow: 100,
			weightHigh: 250 
		},
		OFR003: {
			rate: 0.05,
			distanceLow: 50,
			distanceHigh: 250,
			weightLow: 10,
			weightHigh: 150 
		}
	}

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
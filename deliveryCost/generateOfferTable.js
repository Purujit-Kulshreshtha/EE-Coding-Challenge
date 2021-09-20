const fs = require('fs')

const generateOfferTable = () => {

	const data = (fs.readFileSync("./deliveryCost/criteria.txt")).toString()
	const lines = (data.split("\n")).splice(2, data.length)
	const offerTable = {}
	lines.forEach((line) => {
		const values = line.split(" ")
		const offerCode = values[0]
		const rate = parseInt(values[1])/100

		const distances = values[2].split("-")
		const weights = values[3].split("-")

		const distanceLow = parseInt(distances[0])
		const distanceHigh = parseInt(distances[1])
		const weightLow = parseInt(weights[0])
		const weightHigh = parseInt(weights[1])

		offerTable[offerCode] = {rate, distanceLow, distanceHigh, weightLow, weightHigh}
		// console.log(offerTable)

	})
	return offerTable	

}

module.exports = generateOfferTable
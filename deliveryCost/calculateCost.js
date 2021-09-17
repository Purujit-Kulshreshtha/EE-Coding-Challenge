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


const calculateCost = (pkg, basePrice) => {
	//parsing package information
	const pkgDetails = pkg.split(" ")
	const pkgId = pkgDetails[0]
	const pkgWeight = parseInt(pkgDetails[1])
	const pkgDistance = parseInt(pkgDetails[2])
	const pkgOffer = pkgDetails[3]
	const deliveryCost = basePrice + (pkgWeight * 10) + (pkgDistance * 5)
	const offerCodeData = offerTable[pkgOffer]

	//dealing with invalid input
	if (pkgWeight < 1 || pkgDistance < 1 || !offerCodeData){
		return "Invalid input."
	}


	const isApplicable = (pkgDistance >= offerCodeData.distanceLow && pkgDistance <= offerCodeData.distanceHigh) && (pkgWeight >= offerCodeData.weightLow && pkgWeight <= offerCodeData.weightHigh)

	let totalCost = deliveryCost;
	let discount = 0;
	if (isApplicable){
		discount = deliveryCost*offerCodeData.rate
		discount = Math.round(discount*100)/100
		totalCost = deliveryCost - discount
	}

	return `${pkgId} ${discount} ${totalCost}`

}

module.exports = calculateCost
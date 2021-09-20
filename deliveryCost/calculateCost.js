const calculateCost = (pkg, basePrice, offerTable) => {
	//parsing package information
	const pkgDetails = pkg.split(" ")
	const pkgId = pkgDetails[0]
	const pkgWeight = parseInt(pkgDetails[1])
	const pkgDistance = parseInt(pkgDetails[2])
	const pkgOffer = pkgDetails[3]
	const offerCodeData = offerTable[pkgOffer]

	//dealing with invalid input
	if (pkgWeight < 1 || pkgDistance < 1){
		return "Invalid input."
	}

	//checking if offer code is applicable
	let isApplicable;
	if (offerCodeData){
		 isApplicable = (pkgDistance >= offerCodeData.distanceLow && pkgDistance <= offerCodeData.distanceHigh) && (pkgWeight >= offerCodeData.weightLow && pkgWeight <= offerCodeData.weightHigh)
	} else {
		isApplicable = false
	}

	//calculating discount and final cost
	const deliveryCost = basePrice + (pkgWeight * 10) + (pkgDistance * 5)
	let totalCost = deliveryCost;
	let discount = 0;
	if (isApplicable){
		discount = deliveryCost*offerCodeData.rate
		discount = Math.round(discount*100)/100
		totalCost = deliveryCost - discount
	}

	let packageCostObject = {id: pkgId, discount: discount, totalCost: totalCost}

	return packageCostObject

}

module.exports = calculateCost
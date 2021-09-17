const findDeliveryCosts = require('./deliveryCost')
const findDeliveryTimes = require('./deliveryTime')

const main = (input) => {
	return findDeliveryTimes(input)
}

module.exports = main;
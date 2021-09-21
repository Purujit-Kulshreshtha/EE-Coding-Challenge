const main = require("./main.js")
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let inputValues = {};
let baseDeliveryCost;
let numberOfPackages;
let numberOfVehicles;
let speed;
let maxCapacity;
let output;
rl.question("Enter detials (fromat: 'base-cost number-of-packages number-of-vehivles speed max-capacity): ", (userInput) => {
	const values = userInput.split(" ")
	numberOfPackages = values[1]

	let standards = userInput
	let packagesRequried = parseInt(numberOfPackages)
	let packages = [];
	
	rl.setPrompt("Please enter package details (format: 'id weight distance offer-code'): ")
	rl.prompt()
	rl.on('line', (packageDetails) => {
		let detailsArray = packageDetails.split(" ")

		if (packagesRequried === 1){
			inputValues = {standards, packages}
			output = main(inputValues)
			rl.close()
		} else if (detailsArray.length < 4){
			rl.setPrompt("INVALID INPUT, PLEASE TRY AGAIN: ")
			rl.prompt()
		} else {
			packages.push(packageDetails)
			packagesRequried--
			rl.setPrompt("Please enter next package details (format: 'id weight distance offer-code'): ")
			rl.prompt()
		}
	})
	
})


rl.on('close', () => {
	if (output){
		console.log(output)
	} else {
		console.log("Application terminated by user.")
	}
})
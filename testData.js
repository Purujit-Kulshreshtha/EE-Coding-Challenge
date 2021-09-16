const testData = [
	{input: {
		standards: "100 3", //base delivery cost and number of packages
		packages: ["PKG1 5 5 OFR001", "PKG2 15 5 OFR002", "PKG3 10 100 OFR003"] //array containing details of packages (id, weight, distance, offercode)
		},

	expectedOutput: ["PKG1 0 175", "PKG2 0 275", "PKG3 35 665"] //array containing expected output
	},
]

module.exports = testData
const timeTestData = [

	//test data structre
	// input (object): 
	// 	standards (string): base delivery cost and number of packages
	// 	packages (array of strings): details of packages (id, weight, distance, offercode)

	// expectedOutput (array of strings): expectedOutput

	//given case
	{input: {
		standards: "100 5",
		packages: ["PKG1 50 30 OFR001", "PKG2 75 125 OFR002", "PKG3 175 100 OFR003", "PKG4 110 60 OFR002", "PKG5 155 95 N/A", "2 7 200"]
		},

	expectedOutput: ["PKG1 50 30 OFR001", "PKG2 75 125 OFR002", "PKG3 175 100 OFR003", "PKG4 110 60 OFR002", "PKG5 155 95 N/A", "2 7 200"]
	},
]

module.exports = timeTestData;
const testData = [

	//test data structre
	// input (object): 
	// 	standards (string): base delivery cost and number of packages
	// 	packages (array of strings): details of packages (id, weight, distance, offercode)

	// expectedOutput (array of strings): expectedOutput

	//given case
	{input: {
		standards: "100 3",
		packages: ["PKG1 5 5 OFR001", "PKG2 15 5 OFR002", "PKG3 10 100 OFR003"]
		},

	expectedOutput: ["PKG1 0 175", "PKG2 0 275", "PKG3 35 665"]
	},

	//inverse of given case (first two have applicable offer code)
	{input: {
		standards: "80 3", 
		packages: ["PKG1 75 123 OFR001", "PKG2 121 69 OFR002", "PKG3 5 41 OFR003"] //
		},

	expectedOutput: ["PKG1 144.5 1300.5", "PKG2 114.45 1520.55", "PKG3 0 335"] 
	},

	//edge case
	{input: {
		standards: "21 9",
		
		packages: ["PKG1 101 51 OFR002", "PKG2 249 149 OFR002", "PKG3 71 1 OFR001", "PKG4 199 199 OFR001", "PKG5 11 51 OFR003", "PKG6 149 249 OFR003", "PKG7 -5 5 OFR002", "PKG8 5 -5 OFR003", "PKG9 5 5 OFR004"]
		},
		
	expectedOutput: ["PKG1 90.02 1195.98", "PKG2 227.92 3028.08", "PKG3 73.6 662.4", "PKG4 300.6 2705.4", "PKG5 19.3 366.7", "PKG6 137.8 2618.2", "Invalid input.", "Invalid input.", "Invalid input."]
	}
]

module.exports = testData
const timeTestData = [

	//test data structre
	// input (object): 
	// 	standards (string): base delivery cost, number of packages, number of vehicles, speed of vehicles and capcity of vehicles
	// 	packages (array of strings): details of packages (id, weight, distance, offercode)

	// expectedOutput (array of strings): expectedOutput

	//given case
	{input: {
		standards: "100 5 2 70 200",
		packages: ["package1 50 30 OFR001", "package2 75 125 OFR002", "package3 175 100 OFR003", "package4 110 60 OFR002", "package5 155 95 N/A"]
		},

	expectedOutput: ["package1 3.98", "package2 1.78", "package3 1.42", "package4 0.85", "package5 4.19"]
	},
]

module.exports = timeTestData;
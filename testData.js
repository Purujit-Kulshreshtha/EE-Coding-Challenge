const testData = [

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

	expectedOutput: ['package1 0 750 3.98', 'package2 0 1475 1.78', 'package3 0 2350 1.42', 'package4 105 1395 0.85', 'package5 0 2125 4.19']

	},

	//inverse of given case (first two have applicable offer code), //different ID format
	{input: {
		standards: "80 3 4 55 240", 
		packages: ["PKG1 75 123 OFR001", "PKG2 121 69 OFR002", "PKG3 5 41 OFR003",  "package4 110 60 OFR002", "package5 155 95 N/A",  "package6 90 40 OFR002", "package7 70 90 OFR004"] 
		},

	expectedOutput: ['PKG1 144.5 1300.5 2.23', 'PKG2 114.45 1520.55 1.25', 'PKG3 0 335 0.74', 'package4 103.6 1376.4 1.09', 'package5 0 2105 1.72', 'package6 0 1180 0.72', 'package7 0 1230 1.63']

	},

	//edge case
	{input: {
		standards: "21 9 3 80 250",
		
		packages: ["PKG1 101 51 OFR002", "PKG2 249 149 OFR002", "PKG3 71 1 OFR001", "PKG4 199 199 OFR001", "PKG5 11 51 OFR003", "PKG6 149 249 OFR003", "PKG7 -5 5 OFR002", "PKG8 5 -5 OFR003", "PKG9 5 5 OFR004", "PKG10 75 120 OFR001"]
		},
		
	expectedOutput: ['PKG1 90.02 1195.98 0.63', 'PKG10 137.1 1233.9 1.5', 'PKG2 227.92 3028.08 4.86', 'PKG3 73.6 662.4 0.01', 'PKG4 300.6 2705.4 2.48', 'PKG5 19.3 366.7 0.63', 'PKG6 137.8 2618.2 3.11', 'Invalid input.', 'Invalid input.', 'PKG9 0 96 0.06']

	}
]

module.exports = testData
//this file imports data from the 'testData.txt' file. The tester only has to interact with 'testData.txt' in order to make changes to test cases.
const fs = require('fs')

const testData = []
//takes test data from 'testData.txt' and converts it to usable input format
const addTestData = () => {
	const data = (fs.readFileSync("./testing/testData.txt")).toString()

	const cases = data.split("\n\n") //array containing each test case

	//takes each input case and converts to input suitable for program
	cases.forEach((inputCase) => {
		let caseArray = inputCase.split("OUTPUT")
	
		//converting case-input data
		let caseInput = caseArray[0]
		let caseInputArray = caseInput.split("\n")
		let standards = caseInputArray[0] + " " + caseInputArray[caseInputArray.length-2]
		caseInputArray.splice(0, 1)
		caseInputArray.splice(caseInputArray.length-2)
		let packages = caseInputArray

		//converting expected-output data
		let caseOutput = caseArray[1]
		let expectedOutput = caseOutput.split("\n")
		expectedOutput.splice(0, 1)

		let caseObject = {
			input: {
				standards, 
				packages
			},
			expectedOutput
		}

		testData.push(caseObject)

	})

}
addTestData()

module.exports = testDat

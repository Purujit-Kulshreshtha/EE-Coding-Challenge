const main = require("./main.js")
const testData = require('./testing/testData.js')

test("Returns all delivery detauks.", () => {
	testData.map((testCase) => {
		expect(main(testCase.input)).toEqual(testCase.expectedOutput)
	})
})
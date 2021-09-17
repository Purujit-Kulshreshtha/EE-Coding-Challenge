const main = require("./index.js")
const testData = require("./testData.js")

test("Returns all delivery detials (packageID, discount, cost, estimated-time", () => {
		testData.map((testCase) => {
			expect(main(testCase.input)).toEqual(testCase.expectedOutput)
		})
})
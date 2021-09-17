const main = require("./index.js")
const costTestData = require("./deliveryCost/costTestData.js")
const timeTestData = require("./deliveryTime/timeTestData.js")

// test("Returns all delivery detials (packageID, discount, cost, estimated-time", () => {
// 		costTestData.map((testCase) => {
// 			expect(main(testCase.input)).toEqual(testCase.expectedOutput)
// 		})
// })

test("Returns all delivery times", () => {
	timeTestData.map((testCase) => {
		expect(main(testCase.input)).toEqual(testCase.expectedOutput)
	})
})
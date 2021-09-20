//custom sorting function to be used with JS array,sort()
const arrangeSchedule = (a, b) => {
	let id1 = a.split(" ")[0]
	let idNumber1 = id1[id1.length-1]

	let id2 = b.split(" ")[0]
	let idNumber2 = id2[id2.length-1]

	if (id1 > id2){
		return 1
	}
	if (id2 > id1){
		return -1
	}
	return 0
}

module.exports = arrangeSchedule;
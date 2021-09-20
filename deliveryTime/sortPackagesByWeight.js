const sortpkgsByWeight = (a, b) => {
	if (a.weight > b.weight){
		return -1
	}
	if (b.weight > a.weight){
		return 1
	}
	return 0
}

module.exports = sortpkgsByWeight
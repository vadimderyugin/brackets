module.exports = function check(str, bracketsConfig) {
	const brackets = {
		'2': '1',
		'4': '3',
		'6': '5',
		'7': '7',
		'8': '8',
		'|': '|',
		')': '(',
		'}': '{',
		']': '[',
	}
	let stack = []
	const isClosedBracket = ['2', '4', '6', ')', '}', ']']
	const isOpenBracket = ['1', '3', '5', '(', '{', '[']
	const isOpenClosedSymbol = ['7', '8', '|']


	for (let i = 0; i < str.length; i++) {
		let curent = str[i]
		const findClosedBracket = isClosedBracket.includes(curent)
		const findOpenBracket = isOpenBracket.includes(curent)
		const findOpenClosedSymbol = isOpenClosedSymbol.includes(curent)

		if (findClosedBracket) {
			if (stack.pop() === brackets[curent]) {
				continue
			} else {
				return false
			}
		} else if (findOpenBracket) {
			stack.push(curent)
		} else if (findOpenClosedSymbol) {
			if (!stack.includes(curent)) {
				stack.push(curent)
			} else {
				if (stack.pop() === curent) {
					continue
				} else {
					return false
				}
			}
		}
	}
	return stack.length === 0
}

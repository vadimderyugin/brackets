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
	const isOpenClosedBrackets = ['7', '8', '|']

	for (let i = 0; i < str.length; i++) {
		let curent = str[i]

		if (isClosedBracket.includes(curent)) {
			if (stack.pop() === brackets[curent]) {
				continue
			} else {
				return false
			}
		} else if (isOpenBracket.includes(curent)) {
			stack.push(curent)
		}

		if (isOpenClosedBrackets.includes(curent)) {
			if(!stack.includes(curent)) {
				stack.push(curent)
			} else {
				if(stack.pop() === curent) {
					continue
				} else {
					return false
				}
			}
		}
	}


	return stack.length === 0 || stack.length % 2 === 0
}

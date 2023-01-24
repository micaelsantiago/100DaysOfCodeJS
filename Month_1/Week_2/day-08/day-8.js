function phone(number) {
	const combinations = [];

	const numbers = {
		2: ['a', 'b', 'c'],
		3: ['d', 'e', 'f'],
		4: ['g', 'h', 'i'],
		5: ['j', 'k', 'l'],
		6: ['m', 'n', 'o'],
		7: ['p', 'q', 'r', 's'],
		8: ['t', 'u', 'v'],
		9: ['w', 'x', 'y', 'z']
	};

	number = number.toString()

	function generateCombinations(index, current) {
		if (index === number.length) {
			combinations.push(current);
			return;
		}

		const digit = number[index];
		const letter = numbers[digit];

		for (let letters of letter) {
			generateCombinations(index + 1, current + letters);
		}
	}

	generateCombinations(0, '');

	return console.log(combinations);
}

phone('23') //['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
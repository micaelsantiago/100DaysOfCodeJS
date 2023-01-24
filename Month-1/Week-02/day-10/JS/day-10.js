	const bst = (value) => {
		if (value <= 1 || value >= 19) {
			return console.log('Error');
		};

		let result = 1;

		for (let n = 0; n < value; n++) {
			result = result * 2 * (2 * n + 1) / (n + 2);
		}

		return console.log(result)
	}

	bst(3) //5
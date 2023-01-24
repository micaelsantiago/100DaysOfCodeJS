function progressDay(days) {
	let progress = 0;

	for (let d = 0; d <= days.length; d++) {
		if (days[d] < days[d + 1]) {
			progress++;
		}
	};

	console.log(progress);
}

progressDay([6, 5, 4, 3, 2, 9])
function sockPairs(socks) {
	let total = 0;
	let sock = socks.split('').sort();	

	for (let i = 0; i < sock.length; i++) {
		if (sock[i] === sock[i + 1]) {
			total++;
			i++
		}
	};

	console.log(total);
}

sockPairs("AA"); //1

sockPairs("ABABC"); //2

sockPairs("CABBACCC"); //4
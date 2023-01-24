const calcAge = (age) => {
	if (age >= 0) {
		return console.log(`${age * 365}`);
	};

	console.log("Error, age invalid.");
};

calcAge(65); //23725
calcAge(0);  //0
calcAge(20); //7300
calcAge(-20) //Error, age invalid.
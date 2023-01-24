function ageToDays(age) {
	if (age >= 0) {
		console.log(`${age * 365}`);
	} else {
		console.log('Insira um valor numérico!');
	}
}

ageToDays(65); //7300
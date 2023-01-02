function findNemo(nemo) {
	let nemoArray = nemo.split(' ');
	let result = nemoArray.indexOf('Nemo');

	if (result > -1) {
		console.log(`I found Nemo at ${result + 1}`)
	} else {
		console.log('I can´t find Nemo :(')
	}
}


findNemo('I am finding Nemo !'); //I found Nemo at 4
findNemo('I am finding Dory !') //I can´t find Nemo :(
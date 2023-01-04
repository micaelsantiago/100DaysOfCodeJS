const skewers = [
	"--xo--x--ox--",
	"--xx--x--xx--",
	"--oo--o--oo--",   
	"--xx--x--ox--",
	"--xx--x--ox--"
]

const grill = () => {
	let vegetarianSkewers = 0;
	let non_vegetarianSkewers = 0;

	for (let s in skewers) {
		if (skewers[s].includes('x')) {
			vegetarianSkewers++
		} else {
			non_vegetarianSkewers++
		}
	}

	console.log([vegetarianSkewers, non_vegetarianSkewers]) //[4, 1]
}

grill();
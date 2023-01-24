let array1 = [1, 2, 3, 0, 0, 0];
let array2 = [2 ,5 ,6];
let newArray = [...array1, ...array2];

for (let i = 0; i <= newArray.length; i++) {
	if (newArray[i] === 0){ 
		newArray.splice(i, 1);
		i--
	};
};

newArray.sort((a, b) => a - b);

console.log(newArray);
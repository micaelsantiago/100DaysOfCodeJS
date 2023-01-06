const numberPrime = (number) => {
  let dividers = 0;

  if (number < 2) {
    return console.log('Valor não é válido.');
  };

  for (let n = 1; n <= number; n++) {
    if (number % n === 0) {
      dividers++;
    }
  };

  if (dividers === 2) {
    console.log(number)
  } else {
    return false;
    nextPrime(number);
  }
}; 

const nextPrime = (number) => {
  while (numberPrime(number) === false) {
    number ++;
  };

  return number;
};


nextPrime(12); //13
nextPrime(24); //29
nextPrime(11); //11
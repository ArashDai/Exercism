let steps = (number, s = 0) => {
    if(number < 1){
      throw  new Error('Only positive numbers are allowed');
    
    } else if(number === 1) {
      return s;
    
    } else if(number%2 === 0) {
      number = number/2;
      s++;
      return steps(number,s)
    
    } else {
      number = (number *3) +1;
      s++;
      return steps(number,s)

    }
}

module.exports = { steps }
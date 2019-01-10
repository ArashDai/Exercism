var RLEncoder = function(){

}

RLEncoder.prototype.encode = function (data) {
    data = data.split('');
    let prevLetter;
    let count = 1;
    let solution = [];
  
    data.forEach((c, i, a) => {
      
      if(!prevLetter){
        prevLetter = c;

      } else {

        if(c === prevLetter){
          count++;
        
          if(i === a.length-1){
            solution.push((count>1?count:'')+prevLetter)
          }
        
        } else {
        
          solution.push((count>1?count:'')+prevLetter)
          count = 1;
          prevLetter = c;
        
          if(i === a.length-1){
            solution.push((count>1?count:'')+prevLetter)
          }
        }
      }
    });

    return solution.join('');
}


RLEncoder.prototype.decode = function(data){
  data = data.split('');
  let count;
  let multiplier = [];
  let solution = [];

  data.forEach((c,i,a) => {

    if( c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58 ) {
      multiplier.push(c)

    } else {
      
      count = Number(multiplier.join(''));

      if(count > 1){
        for(let i = 0; i < count; i++){
          solution.push(c)
        }

      } else {
      
        solution.push(c)
      }
      multiplier = [];
    }
  })

  return solution.join('')
}

module.exports = RLEncoder;
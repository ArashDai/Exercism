
export const hey = (message) => {

  if(message.length < 1){
    return 'Fine. Be that way!';
  }

  let m = message.split('');
  let result;
  let punctuation;
  let isAllCaps = true;
  let noLetters = true;
  let isAllSpaces = true;
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);
  const A = 'A'.charCodeAt(0);
  const Z = 'Z'.charCodeAt(0);
  const zero = '0'.charCodeAt(0);
  const nine = '9'.charCodeAt(0);

  for (let letter of m){
    let code = letter.charCodeAt(0);
      if (code >= a && code <= z){
        isAllCaps = false;
        noLetters = false;
        isAllSpaces = false;
        if (punctuation === '?') {
          punctuation = '.';
        }
      }
      else if (code >= A && code <= Z){
        noLetters = false;
        isAllSpaces = false;
        if (punctuation === '?') {
          punctuation = '.';
        }
      }
      else if (code >= zero && code <= nine){
        isAllSpaces = false;
        if (punctuation === '?') {
          punctuation = '.';
        }
      }
      else if (code === '.'.charCodeAt(0)){
        punctuation = '.';
        isAllSpaces = false;
      }
      else if (code === '?'.charCodeAt(0)){
        punctuation ='?';
        isAllSpaces = false;
      }
      else if (code === '!'.charCodeAt(0)){
        punctuation = '!';
        isAllSpaces = false;
      }
  }

  if (isAllSpaces) return 'Fine. Be that way!';
  if (noLetters) isAllCaps = false;

  switch (punctuation) {
    case '!':
      isAllCaps ? result = 'Whoa, chill out!': result = 'Whatever.';
      break;
    case '?':
      isAllCaps ? result = 'Calm down, I know what I\'m doing!': result = 'Sure.';
      break;
    case '.':
      isAllCaps ? result = 'Whoa, chill out!': result = 'Whatever.';
      break;
    default:
      isAllCaps ? result = 'Whoa, chill out!': result = 'Whatever.';
  }
  return result;
};

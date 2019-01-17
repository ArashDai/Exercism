var isPangram = function(input) {

    input = input.toLowerCase().split('');
    let alphabet = {};
    let letterCount = 0;
    
    if(input.length < 26) return false;

    for (let i in input) {
        let element = input[i];

        if (alphabet[element]) {
            alphabet[element]++;
        } else if (((97 <= element.charCodeAt(0)) && (element.charCodeAt(0) <= 122))) {
            alphabet[element.toLowerCase()] = 1;
            letterCount++;

            if (letterCount === 26) {
                return true;
            }
        }
    }
    return false;

};

module.exports = { isPangram };
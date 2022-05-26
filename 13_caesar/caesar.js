const uppercase = [65, 90];
const lowercase = [97, 122];

const caesar = function (word, shift) {
    let finalOutput = '';

    word.split('').forEach(letter => {
        if (!".,:!? ".includes(letter)) {
            let charCode = letter.charCodeAt();
            //1. are these upper case or lower
            const minRange = charCode >= uppercase[0] && charCode <= uppercase[1] ? uppercase[0] : lowercase[0];
            const maxRange = charCode >= uppercase[0] && charCode <= uppercase[1] ? uppercase[1] : lowercase[1];
            
            //add shift
            let afterShift = shift > 0 ? charCode + shift : charCode - Math.abs(shift);
            
            //now after shift, are we going out of range? by how much and start from the beginning oe ending whatever overflown
            do {
                if (afterShift > maxRange) {
                    afterShift = (minRange + (afterShift - maxRange)) - 1;
                }
                else if (afterShift < minRange) {
                    afterShift = (maxRange - (minRange - afterShift)) + 1;
                }
            } while (afterShift > maxRange || afterShift < minRange);

            finalOutput += String.fromCharCode(afterShift);
        }
        else {
            finalOutput += letter;
        }
    });
    return finalOutput;
};

// Do not edit below this line
module.exports = caesar;

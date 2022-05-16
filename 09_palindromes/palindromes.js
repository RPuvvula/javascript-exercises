const palindromes = function (word) {
    const santisedString = RemovePunctuation(word).toLowerCase();
    return santisedString === santisedString.split('').reverse().join('');
};

//remove punctuation and spaces as Palindromes dont count those
function RemovePunctuation(str) {
    return str.replaceAll(/[.,:!?]/g, '').replaceAll(' ', '');
}

// Do not edit below this line
module.exports = palindromes;

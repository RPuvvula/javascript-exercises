const repeatString = function(stringTorepeat, num) {
    if (num < 0) {
        return 'ERROR';
    }
    return stringTorepeat.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;

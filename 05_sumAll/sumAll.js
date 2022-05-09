const sumAll = function (number1, number2) {
    //some validation
    if (typeof (number1) !== "number"
        || typeof (number2) !== "number"
        || (number1 + number2) < 0) {
        return "ERROR";
    }
    const min = Math.min(number1, number2);
    const max = Math.max(number1, number2);
    const n = max - (min) + 1; // total numbers between small and big;
    return (n / 2) * (min + max); //Formula for Adding Consecutive Numbers 

    //alternatively just for loop
    /*
    let sum = 0;
    for (let index = min; index <= max; index++) {
        sum += index;
    }
    return sum;
    */
};

// Do not edit below this line
module.exports = sumAll;

const fibonacci = function (num) {
    if (num < 0 || isNaN(num)) {
        return "OOPS";
    }

    let sequence = 2;
    let f1 = 0;
    let f2 = 1;

    while (sequence < num) {
        if (f2 > f1) {
            f1 = f2 + f1;
        }
        else {
            f2 = f2 + f1;
        }
        sequence = sequence + 1;
    }

    return f1 + f2;
};

// Do not edit below this line
module.exports = fibonacci;

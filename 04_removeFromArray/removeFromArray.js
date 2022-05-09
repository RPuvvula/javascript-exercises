const removeFromArray = function(array, itemToRemove, ...anyOthers) {
    return array.filter(i => i !== itemToRemove && anyOthers.filter(a => a === i).length <= 0);
};

// Do not edit below this line
module.exports = removeFromArray;

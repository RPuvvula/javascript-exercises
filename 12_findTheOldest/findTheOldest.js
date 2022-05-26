const findTheOldest = function (people) {
    const oldest = people.reduce((prev, curr) => {
        prevAge = getAge(prev.yearOfBirth, prev.yearOfDeath);
        currAge = getAge(curr.yearOfBirth, curr.yearOfDeath);
        return prevAge > currAge ? prev : curr;
    });

    return oldest;
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;

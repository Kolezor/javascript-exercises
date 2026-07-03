const findTheOldest = function(people) {
    let currentlyOldestPerson = {};
    let currentlyOldestAge = 0;
    people.forEach(person => {
       let personAge = 0;
       if ("yearOfDeath" in person) {
        personAge = person.yearOfDeath - person.yearOfBirth;
       } else {
        personAge = (new Date()).getFullYear() - person.yearOfBirth;
       }
       
       if (personAge > currentlyOldestAge) {
        currentlyOldestAge = personAge;
        currentlyOldestPerson = person;
       }
    })

    return currentlyOldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

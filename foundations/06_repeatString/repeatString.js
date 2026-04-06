const repeatString = function(string, multiplier) {
    const arr = [];
    if ( multiplier < 0) {
        return "ERROR";
    }
    for (let i = 0; i < multiplier; i++) {
        arr.push(string);
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = repeatString;

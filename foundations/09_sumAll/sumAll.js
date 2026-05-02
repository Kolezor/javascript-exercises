const sumAll = function(...args) {
    if (!args.every((item) => Number.isInteger(item))
        || !args.every((item) => item > 0) 
    ) {
        return "ERROR";
    }
    
    let total = 0
    for (let i = Math.min(...args); i <= Math.max(...args); i++) {
        total += i;
    }
    return total; 
};

// Do not edit below this line
module.exports = sumAll;

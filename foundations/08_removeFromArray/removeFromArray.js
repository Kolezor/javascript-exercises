const removeFromArray = function() {
    const arr = arguments[0];
    const args = Array.from(arguments).slice(1);
    const index = arr.indexOf(args[0]);
    console.log(index);
};

// testArguments: [1, 2, 3, 4], 3

// Do not edit below this line
module.exports = removeFromArray;

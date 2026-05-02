const removeFromArray = function(arr, ...toRemove) {
    return arr.filter((item) => !toRemove.includes(item));
};

// testArguments: [1, 2, 3, 4], 3

// Do not edit below this line
module.exports = removeFromArray;

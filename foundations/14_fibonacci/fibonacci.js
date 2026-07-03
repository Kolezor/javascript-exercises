const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    } else if (Number(number) === 0) {
        return 0;
    }
    let a = 0, b = 1;
    for (let i = 2; i <= Number(number); i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b
};

// Do not edit below this line
module.exports = fibonacci;

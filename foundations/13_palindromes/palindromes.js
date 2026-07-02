const palindromes = function (text) {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '')
    return cleaned === [...cleaned].reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;

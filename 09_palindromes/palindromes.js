const palindromes = function (isPalindrome) {
    const processedString = isPalindrome.toLowerCase().replace(/[^a-z0-9]/g, '')
    return processedString.split("").reverse().join("") == processedString;
};

palindromes('race car') 

// Do not edit below this line
module.exports = palindromes;

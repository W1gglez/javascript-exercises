const reverseString = function(string) {
    let output = "";
    for (let i = 1; (string.length - i) >= 0; i++){
        output += string.charAt(string.length - i);
    }
    return(output);
};

// Do not edit below this line
module.exports = reverseString;

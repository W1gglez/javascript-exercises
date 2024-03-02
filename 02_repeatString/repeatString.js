const repeatString = function(toBeRepeated, timesToRepeat) {
    if(timesToRepeat < 0) return 'ERROR';
    let output = '';
    for(timesToRepeat; timesToRepeat>=1; timesToRepeat--){
        output += toBeRepeated;
    }
    return(output)
};

// Do not edit below this line
module.exports = repeatString;

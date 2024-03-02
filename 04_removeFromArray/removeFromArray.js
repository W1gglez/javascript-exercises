const removeFromArray = function(array, ...value) {
    for (let i = 0; i < value.length; i++){
       while(array.includes(value[i])){
          array.splice(array.indexOf(value[i]),1);
       }
    }
    return(array);
    

};


// Do not edit below this line
module.exports = removeFromArray;

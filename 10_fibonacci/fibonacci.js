const fibonacci = function(member) {
    member = Number(member);
    let int1 =0;
    let int2 = 1;
    if(member < 0){
        return 'OOPS'
    }
    for (let i =1; i <= member; i++){
        let int3 = int1;
        int1 = int2 + int1;
        int2 = int3;
    }
    return int1;
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;

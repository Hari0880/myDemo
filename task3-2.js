
function Mul(num, callback){
    const result = num * 2;
    callback(result);  
}

function sub(resultFromMul, callback){
    const result = resultFromMul - 3;
    callback(result); 
}

function add(resultFromSub) {
    return resultFromSub + 10;
}
function callback(params) {
    return params
    
}

Mul(5, (valmul) => {
    sub(valmul, (valsub) => {
        const finalResult = add(valsub);
        console.log(finalResult);  
    });
});
Mul(10)
console.log(Mul(callback))
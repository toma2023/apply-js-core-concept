//4!
function factorial(number){
    let result = 1;
    for(let i = 4; i>=1; i--){
        result = result * i;
    }
    return result;
}
const result = factorial(4);
console.log(result);
function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
      //  console.log('number is even');

    }
    else{
      //  console.log('number is odd');
    }
}
isEven(303);
isEven(1280);
//or
function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
    return true;

    }
    else{
      return false;
    }
}
const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);
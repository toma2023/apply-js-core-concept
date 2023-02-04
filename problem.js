//problem 1
function hourToMinute(hour){
    const minute = hour * 60;
    return minute;
}
const minutes = hourToMinute(3);
//console.log('3hours equal to', minutes);
// problem 2
function findLeapYear(year){
    const leapYear = [];
    const remainder = year % 4;
   if(remainder === 0){
   
    console.log('Your year is leap year', year);
    leapYear.push
   }
   return leapYear;
}
const myYears = [2023, 2024, 2025, 2028, 2030];
const leapYear = findLeapYear(myYears);
console.log('leap year:', leapYear);

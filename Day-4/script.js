
// Using concat method
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArrayConcat = array1.concat(array2);
console.log('Combined using concat:', combinedArrayConcat);


// Using spread method

const combinedArraySpread = [...array1, ...array2];

console.log('Combined using spread:', combinedArraySpread); 
//to combine two arrays



function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

let year=2026;
let leap=year%4===0 && (year%100!==0 || year%400===0) ? 'Leap Year' : 'Not a Leap Year';

const demo=function(){
    console.log("This is a demo function");
}

function sample(){
    return function demo(){
        console.log("This is a demo function");
    }
}




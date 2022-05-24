/*...after we get those numbers that are greater than zero
and are also integers, as we did in index1.js, we want to also
get the square of each number in that array.

AMAZING!!

*/

//...to do that, we use the map function. The map function takes a function as an argument. Instead of writing a full function, we use the arrow function.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => 
{
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x); //So what the map function does is, for every number to be printed in the array (x), print the square (x * x) -- that is, the number, times the number.   BRILLIANT!! SUPERB0!! 
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
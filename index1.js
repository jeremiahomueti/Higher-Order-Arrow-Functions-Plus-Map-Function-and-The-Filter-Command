//For the function in index.js, we want to print out only the 
//numbers that are greater than zero, and are integers. 

//we'll be making use of some things, Beau Carners (the teacher) calls, filter and maps?!

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => 
{
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0); //The result of this filter command will be numbers that are greater than zero, and also integers.
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//to be continued in index2.js...
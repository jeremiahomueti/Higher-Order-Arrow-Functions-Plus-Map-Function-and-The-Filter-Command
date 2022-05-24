//Higher Order Arrow Functions

//Whenever one function takes another function as an argument, that's a good time for an arrow function.


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => 
{
    const squaredIntegers = arr;
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


//to be continued in index1.js...
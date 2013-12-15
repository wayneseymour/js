var numbers = [1,2,3,4],
    squareNumbers = function (number) {
     return number * number;
    },
    squares = numbers.map(squareNumbers);
 
console.log(squares);//logs [1,4,9,16]

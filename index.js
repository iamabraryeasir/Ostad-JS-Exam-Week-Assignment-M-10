// 01
function calculateDifference(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

console.log(calculateDifference(20, 10));

// 02
function isOdd(number) {
    return number % 2 == 0 ? false : true;
}

console.log(isOdd(12));
console.log(isOdd(13));

// 03
function findMin(numbers) {
    return Math.min(...numbers);
}

console.log(findMin([2, 5, 8, 15, 2, 0]));

// 04
function filterEvenNumbers(numbers) {
    const evenNumbers = [];

    numbers.forEach((number) => {
        if (number !== 0 && number % 2 === 0) {
            evenNumbers.push(number);
        }
    });

    return evenNumbers;
}

console.log(filterEvenNumbers([12, 5, 26, 32, 1, 0, 8, 3]));

// 05
function sortArrayDescending(numbers = []) {
    return numbers.sort().reverse();
}

console.log(sortArrayDescending([5, 8, 9, 2, 1, 4, 3]));

// 06
function lowercaseFirstLetter(string = "") {
    return string[0].toLowerCase() + string.slice(1);
}

console.log(lowercaseFirstLetter("ABRAR YEASIR"));

// 07
function findAverage(numbers = []) {
    let sum = 0;

    numbers.forEach((number) => (sum += number));

    return sum / numbers.length;
}

console.log(findAverage([2, 8, 9, 1, 5]));

// 08
function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2025));

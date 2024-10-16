console.log("Hello world!")

let age = 19;
console.log (`I am ${age} years old`)

let student= true;
console.log (`I am student ${student} `)

let x = parseInt(window.prompt(""));
let y =  parseInt(window.prompt(""));
let z = Math.sqrt(x**2+y**2);
document.getElementById("P1").innerHTML= z;
    
 // the current date
 const currentDate = new Date();
 const dateString = currentDate.toDateString();
 document.getElementById('date').textContent = dateString;


 //Year
 function checkLeapYear() {
    const year = document.getElementById('yearInput').value;
    let resultText;

    // Logic to check for leap year
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        resultText = year + " is a leap year.";
    } else {
        resultText = year + " is not a leap year.";
    }

    // Display result
    document.getElementById('result').textContent = resultText;
}

//Multiplication and Division Calculator
function multiply() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 * num2;
    document.getElementById('resultcalcul').textContent = result;
}

function divide() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 === 0) {
        document.getElementById('resultcalcul').textContent = "Cannot divide by zero!";
    } else {
        const result = num1 / num2;
        document.getElementById('resultcalcul').textContent = result;
    }
}

//Temperature task 11
function celsiusToFahrenheit() {
    let celsius = parseFloat(document.getElementById('celsius').value);
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('tempResult').textContent = `${celsius}°C is ${fahrenheit}°F`;
}

function fahrenheitToCelsius() {
    let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('tempResult').textContent = `${fahrenheit}°F is ${celsius}°C`;
}
//Even OR Odd task 12
function checkEvenOdd() {
    let number = parseInt(document.getElementById('number').value);
    let result = (number % 2 === 0) ? "Even" : "Odd";
    document.getElementById('evenOddResult').textContent = `${number} is ${result}`;
}
//task 13 largest or smallest
function findLargestAndSmallest() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    let largest = Math.max(num1, num2, num3);
    let smallest = Math.min(num1, num2, num3);

    document.getElementById('largestSmallestResult').textContent = `Largest: ${largest}, Smallest: ${smallest}`;
}
//Heron Formula
function calculateTriangleArea() {
    let a = parseFloat(document.getElementById('side1').value);
    let b = parseFloat(document.getElementById('side2').value);
    let c = parseFloat(document.getElementById('side3').value);

    let s = (a + b + c) / 2;  // semi-perimeter
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));  // Heron's formula

    document.getElementById('triangleAreaResult').textContent = `The area of the triangle is: ${area}`;
}
//Factorial Calcul
function calculateFactorial() {
    let num = parseInt(document.getElementById('factorialInput').value);
    let factorial = 1;
    
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    
    document.getElementById('factorialResult').textContent = `Factorial of ${num} is: ${factorial}`;
}

//task 16
function countVowelsConsonants() {
    let str = document.getElementById('inputString').value.toLowerCase();
    let vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char >= 'a' && char <= 'z') {
            consonantCount++;
        }
    }

    document.getElementById('countResult').textContent = `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
}

//task 17 Convert Seconds into Hours and Minutes
function convertSeconds() {
    let totalSeconds = parseInt(document.getElementById('secondsInput').value);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = (totalSeconds % 3600) / 60;
    document.getElementById('timeResult').textContent = `${totalSeconds} seconds is ${hours} hours and ${minutes.toFixed(2)} minutes.`;
}
//Find the Most Frequent Number in an Array task 18
function findMostFrequent() {
    let array = document.getElementById('arrayInput').value.split(',').map(Number);
    let freqMap = {};
    let mostFrequentNum = null;
    let maxCount = 0;

    array.forEach(num => {
        freqMap[num] = (freqMap[num] || 0) + 1;
        if (freqMap[num] > maxCount) {
            maxCount = freqMap[num];
            mostFrequentNum = num;
        }
    });

    document.getElementById('mostFrequentResult').textContent = `The most frequent number is ${mostFrequentNum}, appearing ${maxCount} times.`;
}
//Fibonacci Series Calculation task 19
function calculateFibonacci() {
    let n = parseInt(document.getElementById('fibInput').value);
    let fibSequence = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }

    document.getElementById('fibResult').textContent = `Fibonacci sequence: ${fibSequence.join(', ')}`;
}
//Days Left Before New Year task 20
function calculateDaysLeft() {
    let today = new Date();
    let nextYear = today.getFullYear() + 1;
    let newYear = new Date(nextYear, 0, 1);
    let diff = newYear - today;  // difference in milliseconds
    let daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));  // convert milliseconds to days

    document.getElementById('daysLeftResult').textContent = `${daysLeft} days left before New Year.`;
}
// covert to upper case:
function convertToUppercase(string){
    return string.toUpperCase()

}
console.log("Uppercase:", convertToUppercase("apple"))

// takes a string as input and counts the number of words in it
function countWords(string){
    return string.length;
}
console.log("Word count:", countWords("Simran"))

// takes a string as input and reverses it
function stringReverse(string){
    return string.split('').reverse().join('');
}
console.log("Reverse string:", stringReverse("Hello"))

// checks if a given string is a palindrome.
function isPalindrome(string) {
    let reverseString = string.split("").reverse().join("");

    if (reverseString == string) {
        console.log(string, "is palindrome")
}
else{
    console.log(string, "is not palindrome")
}
}
console.log(isPalindrome("level"))

// takes a string as input and removes all the vowels from it
function removeVowels(string){
    return string.replace(/[aeiou]/gi, '')
}
console.log("Remove vowel:", removeVowels("Simran"))

// takes a number as input and checks if it is a prime number
function checkPrime(number){
    let i, flag = true;
    for (i = 2; i <= number - 1; i++) {
        if (number % i == 0) {
            flag = false;
        }
    }
    if (flag == true)
        console.log(number + " is prime");
    else
        console.log(number + " is not prime");
}
checkPrime(13);

// takes an array of numbers as input and returns the sum of all the numbers.
function arraySum(){
    let arr = [2, 3, 4, 5];
    let sum = 0;

    arr.forEach(x => {
    sum += x;
    });

console.log("Sum is " + sum);
}
arraySum();

// takes a number as input and calculates its factorial.
function calFactorial(number){
    if (number === 0) {
        return 1;
    }
    else {
        return number * calFactorial( number - 1 );
    }
}
console.log("Factorial is",calFactorial(3));

// takes a number as input and checks if it is a perfect square.
function checkPerfectSquare(number){
    const squareRoot = Math.sqrt(number);
    return squareRoot === Math.floor(squareRoot);
}
console.log("Is perfect square:",checkPerfectSquare(25));

// takes a number as input and checks if it is a Fibonacci number.  (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ..)
function isFibonacci(number){
    let a = 0;
    let b = 1;
    let fib = 0;

    // Keep generating Fibonacci numbers until the generated number is greater than or equal to the input number
    while (fib < number) {
        fib = a + b;
        a = b;
        b = fib;
    }
    return fib === number;
}
console.log("Is Fibonacci:",isFibonacci(7))

// takes two arrays as input and merges them into a single array.
function mergeArray(arr1, arr2){
    return arr1.concat(arr2);
}
console.log("Merged Array:", mergeArray([12, 23, 34], [21, 31, 44]))

// takes an array of numbers as input and returns the largest number.
function largestNumber(arr) {
	return Math.max(...arr);
}

const num = [10, 15, 28, 20, 13];
const result = largestNumber(num);

console.log("The largest element in the array is:" + result);

// takes an array of strings as input and sorts them alphabetically.
function sortStringAlphabetically(string){
    return string.sort();
}
const arr3 =  ["y", "a", "g", "e","c"];
console.log("Sorted array:", sortStringAlphabetically(arr3))

// takes an array of numbers as input and removes all duplicates.
function removeDuplicate(arr) {
    return [...new Set(arr)];
}
// function removeDuplicate(arr){
//     return arr.filter((item, index) => {
//         arr.indexOf(item) === index
//     });
// }
const arr4 = [1, 2, 1, 3, 4, 5, 4]
console.log("Removed Duplicate numbers:",removeDuplicate(arr4))

// takes an array of numbers as input and returns a new array with only the even numbers.
function evenArray(array){
    const evenNumbers = array.filter(num => num%2 === 0);
    return evenNumbers;
}
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Array with only even numbers:",evenArray(numbersArray));

// creates an object representing a person with properties like name, age, and gender
const person = {
    name: "Simran Shrestha",
    age:"23",
    gender:"Female"
};
console.log(person)

// takes two objects as input and merges their properties into a single object.
const personDetails = {
    name: "Simran Shrestha",
    address:"Raniban"
};
const contact ={
    phone: "9840760301"
};
function mergeObject(obj1, obj2){
    const mergedObject = {...obj1, ...obj2};
    return mergedObject;
}
console.log(mergeObject(personDetails, contact))

// takes an array of objects representing students and returns an array of their names.
function getName(students){
    const name = students.map(student => student.name);
    return name;
}
const student = [
    {name: "Shushrusha", address: "Khusibu"},
    {name: "Simran", address: "Raniban"}
];
console.log("Array of students name:",getName(student))

// takes an object representing a student with properties like name and grades, and calculates their average grade
function calculateAvgGrade(student){
    
    const sum = student.reduce((total, student) => total + student.grade, 0);
    const avg = sum/student.length;
    return avg;
}
const student1 = [
    {name: "Sudarshan", grade: 40},
    {name: "Simran", grade: 100},
    {name: "Shushrusha", grade: 100}
];
console.log("Average marks is",calculateAvgGrade(student1))




// takes an array of objects representing books with properties like title and author, and sorts them alphabetically by title.
function sortBookByTitle(books){
    books.sort((a,b) => {

        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        
        if(titleA < titleB){
            return -1;
        }else if(titleA > titleB){
            return 1;
        }else{
            return 0;
        }
        
    });
    return books;
}
const bookDetails = [
    {title: "The Adventure of Tom Sawyer", author: "Mark Twain"},
    {title: "Treasue Island", author: "Robert Louis"},
    {title: "The Adventure of Everest", author: "Aayusha"},
];
console.log(sortBookByTitle(bookDetails))
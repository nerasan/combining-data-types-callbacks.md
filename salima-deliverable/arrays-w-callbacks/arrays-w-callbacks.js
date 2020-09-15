const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// EVERY
// 1. Determine if every number is greater than or equal to 0.

const checkZero = (num) => {
    return num >= 0
}
console.log(nums.every(checkZero))

// note to self: this checks it also, but it returns an array with true/false for each element of the array. while 'every' returns true or false after checking if all elements meet the condition.
// const greaterThan = (num) => {
//     if (num >= 0) {
//         return true
//     } else {
//       return false
//     }
// }
// let greaternums = nums.map(greaterThan)
// console.log(greaternums)

// 2. Determine if every word shorter than 8 characters.

const checkEight = (word) => {
    return word.length < 8
}
console.log(panagram.every(checkEight))

// note to self: same as explanation above
// const shorterWord = (word) => {
//     if (word.length < 8) {
//         return true 
//     } else {
//         return false
//     }
// }
// let shortwords = panagram.map(shorterWord)
// console.log(shortwords)

// FILTER
// 1. filter the array for numbers less than 4
const filterFour = (num) => {
    return num < 4
}
console.log(nums.filter(filterFour))

// 2. filter words that have an even length
const filterEven = (word) => {
    return word.length % 2 === 0
}
console.log(panagram.filter(filterEven))

// FIND
// 1. Find the first value divisible by 5
const findDivisibleBy5 = (num) => {
    return num % 5 === 0
}
console.log(nums.find(findDivisibleBy5))

// 2. find the first word that is longer than 5 characters
const findLongerThan5 = (word) => {
    return word.length > 5
}
console.log(panagram.find(findLongerThan5)) // no word is greater than 5. tested it with 4 and it works though.

// FIND INDEX
// 1. find the index of the first number that is divisible by 3
const findIndexDivisible3 = (num) => {
    return num % 3 === 0
}
console.log(nums.findIndex(findIndexDivisible3))

// 2. find the index of the first word that is less than 2 characters long
const findIndexLessThan2 = (word) => {
    return word.length < 2
}
console.log(panagram.findIndex(findIndexLessThan2)) // returns -1 aka undefined bc no word is less than 2 characters. tested it with less than 4 and it works though.

// FOR EACH
// 1. console.log each value of the nums array multiplied by 3
const multiplyBy3 = (num, index, arr) => {
    arr[index] = num * 3
    console.log(arr[index])
}

nums.forEach(multiplyBy3)

// 2. console.log each word with an exclamation point at the end of it
const exclamationWord = (word, index, arr) => {
    arr[index] = word + '!'
    console.log(arr[index])
}
panagram.forEach(exclamationWord)

// MAP
// 1. make a new array of each number multiplied by 100
const multiplyBy100 = (num) => {
    return num * 100
}
let hundreds = nums.map(multiplyBy100)
console.log(hundreds)

// 2. make a new array of all the words in all uppercase
const uppercaseWords = (word) => {
    return word.toUpperCase()
}
let loudwords = panagram.map(uppercaseWords)
console.log(loudwords)

// SOME -- tests whether at least one element in the array passes test
// 1. Find out if some numbers are divisible by 7
const someDivisibleBy7 = (num) => {
    return num % 7 === 0
}
console.log(nums.some(someDivisibleBy7))

// 2. Find out if some words have the letter a in them
const checkLetterA = (word) => {
    return word.includes('a')
}
console.log(panagram.some(checkLetterA))
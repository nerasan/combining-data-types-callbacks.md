// COMBINING DATATYPES

// 1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

// const crayonBox = {
//     name: ['tangerine orange', 'sunshine yellow', 'midnight blue']
//   }
//   console.log(crayonBox.name[1])

// 2. Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {cap: {
    material: 'metal',
    color: 'white'
}}
console.log(bottle.cap.material)

// 3. Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
    {name: 'brewed coffee', price: 1.50},
    {name: 'iced latte', price: 4.50},
    {name: 'breakfast bagel', price: 2.00}
]
console.log(receipt[1].name)

// 4. Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
    ['harry', 'liam', 'louis', 'niall', 'zayn'],
    ['jon', 'sansa', 'arya', 'robb', 'bran']
]
console.log(apartmentBuilding[0][0])

// COMBINING OBJECTS, ARRAYS, AND FUNCTIONS MORE THAN ONE LEVEL DEEP

// REVISIT THIS
// 1. Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

const knit = ()=>{
    return {
        item: 'scarf',
        size: '6ft'
    }
}
console.log(knit().item)

// 2. Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

const crayonSelector = ()=>{
    return {
        crayons: ['tangerine orange', 'sunshine yellow', 'midnight blue']
    }
};

console.log(crayonSelector().crayons[2])

// 3. Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

const powerButton = ()=>{
    return {
        options:()=>{
            console.log('select a song')
        }
    }
}

powerButton().options()

// MODEL A VENDING MACHINE

const vendingMachine = {
    vend:()=>{
        return {
            snacks: [
                {name: 'oreos', price: 1.00},
                {name: 'cheetos', price: 2.00},
                {name: 'cookie', price: 2.50}
            ]
        }
    }
}

vendingMachine.vend().snacks[1].name

// CALLBACKS

// 1. Make a function add that takes two arguments (numbers) and sums them together
const add = (num1, num2) => {
    return sum = num1 + num2
}
console.log(add(4,4))

// 2. Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (num1, num2) => {
    return difference = num1 - num2
}
console.log(subtract(10,20))

// 3. Make a function multiply that takes two arguments and multiplies them

const multiply = (num1, num2) => {
    return product = num1 * num2
}
console.log(multiply(5,5))

// 4. Make a function divide that takes two arguments and divides them

const divide = (num1, num2) => {
    return quotient = num1 / num2
}
console.log(divide(10,1))

// 5. Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).

const calculate = (num1, num2, operates) => {
    return operates(num1, num2)
}

calculate(4, 4, add)
calculate(10, 20, subtract)
calculate(5, 5, multiply)
calculate(10, 1, divide)
//note: this will only return the last call of calculate() due to return

// FUNCTION DEFINITION PLACEMENT

const bar = () => {
    console.log('bar here');
}
bar();
const foo = () => {
    console.log('foo here');
}
foo();

// ERROR READING
//What is meant by the error(s) this produces?
// the error is saying the equal sign is missing between 'foo' and the parentheses. once you fix that, it will give another error saying the function foo cannot be accessed before initialization. this can be fixed by moving foo() to the bottom after the function has been defined.
foo();

const foo ()=>{
    console.log('hi');
}

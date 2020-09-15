// COMBINING DATATYPES -- QUESTIONS

// 1. Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = ['tangerine orange', 'sunshine yellow', 'midnight blue']
console.log(crayonBox[1])

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
// Functions Assignment

// 1. Function to print full name
function fullName() {
    console.log("Maureen Nyambura");
}
fullName();

// 2. Function with parameters returning full name
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(fullName("Maureen", "Nyambura"));

// 3. Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(10,10));

// Higher Order Functions Assignment
const countries = [
    'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany',
    'Hungary', 'IceLand', 'Ireland', 'Japan', 'Kenya'
];
const names = ['Tamara', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' }
];

// Console logging arrays
countries.forEach(country => console.log(country));
names.forEach(name => console.log(name));
numbers.forEach(number => console.log(number));

// Transform arrays
const uppercaseCountries = countries.map(country => country.toUpperCase());
const countriesLength = countries.map(country => country.length);
const squaredNumbers = numbers.map(num => num * num);
const uppercaseNames = names.map(name => name.toUpperCase());
const productPrices = products.map(product => product.price);

// Filtering arrays
const countriesWithLand = countries.filter(country => country.includes('land'));
const sixCharCountries = countries.filter(country => country.length === 6);
const sixOrMoreCharCountries = countries.filter(country => country.length >= 6);
const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
const validPrices = products.filter(product => typeof product.price === 'number' && product.price > 0);

// Function to find countries by pattern
function findCountriesByPattern(pattern) {
    return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
}
console.log(findCountriesByPattern('land'));

// Object Assignment
const dog = {};
console.log(dog);
dog.name = "Puff Puff";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;
dog.bark = function() {
    return "Woof woof!";
};
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
];

const firstItem = countries[0];
const lastItem = countries[countries.length - 1];
const middleItem = countries[Math.floor(countries.length / 2)];

console.log(firstItem, lastItem, middleItem);

const tempCountries = countries.splice(1,6);
console.log(tempCountries);
console.log(countries);

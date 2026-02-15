const arr = [2,3,4,8,1];
arr.push(7);
console.log(arr);
arr.pop();
console.log(arr);

//Scleit all elements
console.log(arr.join(', '));
const message = 'one, two, three, four, five';
console.log(message);
message.split(',').join(', ')

//Copy elments from first to second
const arr2 = [...arr];
const arr3 = arr.slice(0,3);
console.log(arr2);
console.log(arr3);
const total = [...arr, ...arr2];
console.log(total);

const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Grapes",
    "Peach",
    "Watermelon",
    "Kiwi"
];
console.log(fruits.indexOf('Apple'));

const users=[
    {
        name: 'Александр',
        age: 28,
        city: 'Москва',
    },
    {
        name: 'Михаил',
        age: 30,
        city: 'Екатеринбург',
    },
    {
        name: 'Василий',
        age: 40,
        city: 'Москва',
    },
    {
        name: 'Василий',
        age: 50,
        city: 'Санкт-Петербург',}
]

// const usersFormatted= users.map(user =>{
//     return `${user.name},  ${user.age} years old, live in ${user.city}`;
// })
//console.log(usersFormatted);
//AVG age
let summ = 0;
for( let i=0; i<users.length; i++){
    summ = users[i].age + summ;
}
console.log(summ/users.length);

//Sort
const arr5 = [8,4,500];
console.log(arr5.sort())
console.log(arr5.sort((a,b)=> a-b));
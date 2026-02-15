let user = {     
    name: "John",  
<<<<<<< HEAD
    age: 30        
  };
alert( user.name ); // John
alert( user.age ); // 30
=======
    age: 30,
    "likes birds" :true      
  };
alert( user.name ); 
alert( user.age ); 

//Work with booleans:
user["likes birds"] = true;
//get
alert(user["likes birds"]); // true
// delete
delete user["likes birds"];

//using loop:
let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
  }

  //working with map
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'
alert( map.size ); // 3

//Ex2
let john = { name: "John" };
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);

alert( visitsCountMap.get(john) ); // 123

//Ex3
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}

//Set = unique
let set = new Set();

let joh = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
// visits, some users come multiple times
set.add(joh);
set.add(pete);
set.add(mary);
set.add(joh);
set.add(mary);
// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}




>>>>>>> 726da44 (Tasks of WD)

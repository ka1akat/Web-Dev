//const name = prompt('Enter your name');
const name = 'Karakat';
console.log(name.length);
//by index
console.log(name[6]);
console.log(name.toLowerCase())
console.log(name.toUpperCase())
//Избавляемся отт лишнего
let s = '  How are you?';
console.log(s.trim());

//Index of word in sentense
let sent = 'Hi everyone, my name is Karakat. What is, up?';
let str = 'Javascript'
console.log(sent.indexOf(name));
console.log(sent.includes((name)));
console.log(str.substring(0,4)) ;
console.log(str.repeat(3));

const name2 = 'Kamila';
console.log(sent.replace(name, name2)); //replaceAll
console.log(sent.split(','))

//Check the name is true entered or not
const name3 = prompt('What is your name?');
const clearVal = name3.trim().toLowerCase();
if(clearVal === 0){
    alert("Name can not be empty!");
}else if(clearVal.includes('admin')){
    alert("Name can not be used");
}else{
    alert('Your name is ' + name + '!');
}


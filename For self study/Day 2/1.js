let parent = document.getElementById("container");
let element = document.createElement("p");
element.textContent = "Hello World!";
element.classList.add("item");
parent.appendChild(element);

let newItem = document.createElement("li");
newItem.textContent = "Orange";
let list = document.getElementById("list");
let banana = list.children[1];
list.insertBefore(newItem, banana);

//Copy
// let copy = element.cloneNode(true);
// document.body.appendChild(copy);


// let result = confirm("Delete file?");
// if(result){
//     alert("Deleted item");
// }else{
//     alert("No deleting item");
// }


let button = document.getElementById("button");
button.addEventListener("click", function(){
    alert("Informations sent!");
});
let input = document.getElementById("text");
input.addEventListener("focus", function(){
    console.log("Input selected");
});

let btn = document.getElementById("btn");
btn.addEventListener("click", sayHello);
function sayHello(){
    alert("Hello!");
}
//setTimeout
let token = setTimeout(() => {
    console.log("Runs once after 5 seconds");
}, 5000);
//clearTimeout(token);

let seconds = 0;
let timer = setInterval(() => {
    seconds++;
    console.log(seconds);
}, 1000);
clearInterval(timer);
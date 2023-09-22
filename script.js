// Single
/* multiple 

lines */

const PI = 3.14;
const a = 1;
console.log(a);

function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

// Array
const fruits = ["Apple", "Orange", "Durian"];
console.log(fruits);
let hello = "";
for (let i = 0; i < fruits.length; i++) {
  hello += fruits[i] + " ";
}
console.log(hello);

let hello2 = "";
for (let fruit in fruits) {
  // using in gets each key, to get value you need "of"
  hello += fruit + " ";
}
console.log(hello2);

const flag = true;
if (flag) {
} else {
}

let x = 5;
while (x > 0) {
  console.log("hi");
  x--;
}

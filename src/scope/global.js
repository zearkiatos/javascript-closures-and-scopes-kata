// variables
var a; // deciaration
var b = "b"; // declaration and assignation
b = "bb"; // reasigned
var a = "aa"; // redeclaration

// Global Scope
var fruit = "🍎";

console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "🇨🇴"; // Global
  console.log(country);
}

countries();
console.log(country);

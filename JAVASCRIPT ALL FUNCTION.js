// 1. Function Declaration
function add(a, b) {
    return a + b;
}
console.log("Add:", add(5, 3));


// 2. Function Expression
const multiply = function(a, b) {
    return a * b;
};
console.log("Multiply:", multiply(4, 2));


// 3. Arrow Function
const subtract = (a, b) => a - b;
console.log("Subtract:", subtract(10, 4));


// 4. Function with No Parameters
function greet() {
    console.log("Hello, welcome!");
}
greet();


// 5. Function with Parameters
function greetUser(name) {
    console.log("Hello " + name);
}
greetUser("Alex");


// 6. Function with Return Value
function square(num) {
    return num * num;
}
console.log("Square:", square(5));


// 7. Anonymous Function (used as callback)
setTimeout(function() {
    console.log("This message is delayed by 5 second");
}, 5000);


// 8. Callback Function
function showMessage(callback) {
    callback();
}

showMessage(function() {
    console.log("Hello from callback function!");
});


// 9. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("IIFE executed immediately");
})();


// 10. Default Parameters
function welcome(name = "Guest") {
    console.log("Welcome " + name);
}
welcome();
welcome("Sam");


// 11. Rest Parameters
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log("Sum:", sum(1, 2, 3, 4, 5));

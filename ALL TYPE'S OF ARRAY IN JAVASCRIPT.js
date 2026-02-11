// Take array size
let size = parseInt(prompt("Enter array size:"));
let arr = [];

// Take array elements
for (let i = 0; i < size; i++) {
    arr[i] = parseInt(prompt("Enter value " + (i + 1) + ":"));
}

console.log("Initial Array:", arr);
console.log("Array Length:", arr.length);


// =======================
// PUSH
// =======================
let pushValue = parseInt(prompt("Enter value to push (add at end):"));
arr.push(pushValue);
console.log("After push:", arr);


// =======================
// POP
// =======================
let poppedValue = arr.pop();
console.log("After pop:", arr);
console.log("Removed (popped) value:", poppedValue);


// =======================
// UNSHIFT
// =======================
let unshiftValue = parseInt(prompt("Enter value to unshift (add at beginning):"));
arr.unshift(unshiftValue);
console.log("After unshift:", arr);


// =======================
// SHIFT
// =======================
let shiftedValue = arr.shift();
console.log("After shift:", arr);
console.log("Removed (shifted) value:", shiftedValue);


// =======================
// indexOf()
// =======================
let searchValue1 = parseInt(prompt("Enter value to find using indexOf():"));
let firstIndex = arr.indexOf(searchValue1);
console.log("indexOf result:", firstIndex);


// =======================
// lastIndexOf()
// =======================
let searchValue2 = parseInt(prompt("Enter value to find using lastIndexOf():"));
let lastIndex = arr.lastIndexOf(searchValue2);
console.log("lastIndexOf result:", lastIndex);


// =======================
// includes()
// =======================
let searchValue3 = parseInt(prompt("Enter value to check using includes():"));
let isPresent = arr.includes(searchValue3);
console.log("includes result:", isPresent);


// =======================
// find()
// =======================
let conditionValue = parseInt(prompt("Enter number to find first element greater than this value:"));
let foundElement = arr.find(x => x > conditionValue);
console.log("find result (first element greater than input):", foundElement);


// =======================
// findIndex()
// =======================
let foundIndex = arr.findIndex(x => x > conditionValue);
console.log("findIndex result (index of first element greater than input):", foundIndex);



// =======================
// SORT
// =======================

// Default sort (string-based)
let stringSorted = [...arr].sort();
console.log("Default sort (string-based):", stringSorted);

// Proper numeric ascending sort
let numericSorted = [...arr].sort((a, b) => a - b);
console.log("Numeric ascending sort:", numericSorted);

// Reverse array
let reversed = [...arr].reverse();
console.log("Reversed array:", reversed);



// =======================
// JOIN & TOSTRING
// =======================

let joined = arr.join("*");
console.log("join('-'):", joined);

let stringVersion = arr.toString();
console.log("toString():", stringVersion);



// =======================
// SLICE
// =======================

let sliced = arr.slice(1, 3);  // from index 1 to 2
console.log("slice(1,3):", sliced);



// =======================
// SPLICE
// =======================

let spliceArr1 = [...arr];
spliceArr1.splice(1, 1);  // Remove 1 element at index 1
console.log("splice(1,1) - Remove:", spliceArr1);

let spliceArr2 = [...arr];
spliceArr2.splice(1, 0, 100);  // Insert 100 at index 1
console.log("splice(1,0,100) - Insert:", spliceArr2);



// =======================
// CONCAT
// =======================

let concatenated = arr.concat([5, 6]);
console.log("concat([5,6]):", concatenated);



// =======================
// FLAT
// =======================

let nestedArr = [1, 2, [3, 4], [5, [6]]];
console.log("Nested Array:", nestedArr);

let flattened = nestedArr.flat();
console.log("flat():", flattened);



// =======================
// FILL
// =======================

let fillArr = [...arr];
fillArr.fill(1000);
console.log("fill(0):", fillArr);



// =======================
// EVERY
// =======================

let allPositive = arr.every(x => x > 0);
console.log("every(x > 0):", allPositive);



// =======================
// SOME
// =======================

let someGreaterThanTwo = arr.some(x => x > 20);
console.log("some(x > 20):", someGreaterThanTwo);



// =======================
// Array.isArray()
// =======================

console.log("Array.isArray(arr):", Array.isArray(arr));

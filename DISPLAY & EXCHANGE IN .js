let size = parseInt(prompt("Enter array size:"));
let arr = [];

for (let i = 0; i < size; i++) {
    arr[i] = parseInt(prompt("Enter value " + (i + 1) + ":"));
}

console.log("Array:", arr);
console.log("Array Length:", arr.length);

let choice;

do {
    choice = prompt(
        "MENU\n" +
        "1. Search\n" +
        "2. Exchange\n" +
        "3. Exit\n" +
        "Enter your choice:"
    );

    if (choice == 1) {

        let searchValue = parseInt(prompt("Enter value to search:"));
        let positions = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === searchValue) {
                positions.push(i + 1);
            }
        }

        if (positions.length > 0) {
            alert("Value found at positions: " + positions.join(", "));
        } else {
            alert("Value not found");
        }
    }

    else if (choice == 2) {

        let oldValue = parseInt(prompt("Enter value to replace:"));
        let index = arr.indexOf(oldValue);

        if (index !== -1) {
            let newValue = parseInt(prompt("Enter new value:"));
            arr[index] = newValue;

            alert("Value successfully replaced");
            alert("Updated Array: " + arr);
        } else {
            alert("Value not found");
        }
    }

} while (choice != 3);

alert("--------- Program Closed ---------");

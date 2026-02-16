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
        let found = false;

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] === searchValue) {

                found = true;

                let before = (i > 0) ? arr[i - 1] : "No Before Value";
                let after = (i < arr.length - 1) ? arr[i + 1] : "No After Value";

                alert(
                    "Value Found!\n\n" +
                    "Position: " + (i + 1) + "\n" +
                    "Before Value: " + before + "\n" +
                    "Current Value: " + arr[i] + "\n" +
                    "After Value: " + after
                );
            }
        }

        if (!found) {
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

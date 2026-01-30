let num = Number(prompt("Enter a number"));
let rev = 0;

while (num > 0) {
  let digit = num % 10;
  rev = rev * 10 + digit;
  num = parseInt(num / 10);
}

alert("Reverse = " + rev);

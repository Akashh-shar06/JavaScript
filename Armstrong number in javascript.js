let num = Number(prompt("Enter a number"));
let temp = num;
let sum = 0;

while (temp > 0) {
  let digit = temp % 10;
  sum += digit * digit * digit;
  temp = Math.floor(temp / 10);
}

if (sum === num) {
  alert(num + " is an Armstrong number");
} else {
  alert(num + " is NOT an Armstrong number");
}

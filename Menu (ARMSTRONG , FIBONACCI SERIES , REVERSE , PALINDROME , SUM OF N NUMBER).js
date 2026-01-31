let choice = Number(prompt(
  "MENU\n" +
  "1. Armstrong Number\n" +
  "2. Fibonacci Series\n" +
  "3. Reverse Number\n" +
  "4. Palindrome Number\n" +
  "5. Sum of N Numbers\n" +
  "Enter your choice:"
));

switch (choice) {

  case 1:
    let num1 = Number(prompt("Enter a number"));
    let temp1 = num1;
    let sum1 = 0;

    while (temp1 > 0) {
      let d = temp1 % 10;
      sum1 += d * d * d;
      temp1 = Math.floor(temp1 / 10);
    }

    if (sum1 === num1)
      console.log(num1 + " is an Armstrong number");
    else
      console.log(num1 + " is not an Armstrong number");
    break;

  case 2:
    let n = Number(prompt("Enter number of terms"));
    let a = 0, b = 1;

    console.log(a);
    console.log(b);

    for (let i = 3; i <= n; i++) {
      let c = a + b;
      console.log(c);
      a = b;
      b = c;
    }
    break;

  case 3:
    let num2 = Number(prompt("Enter a number"));
    let rev = 0;

    while (num2 > 0) {
      let r = num2 % 10;
      rev = rev * 10 + r;
      num2 = Math.floor(num2 / 10);
    }

    console.log("Reverse = " + rev);
    break;

  case 4:
    let num3 = Number(prompt("Enter a number"));
    let temp3 = num3;
    let rev2 = 0;

    while (temp3 > 0) {
      let r = temp3 % 10;
      rev2 = rev2 * 10 + r;
      temp3 = Math.floor(temp3 / 10);
    }

    if (rev2 === num3)
      console.log(num3 + " is Palindrome");
    else
      console.log(num3 + " is not Palindrome");
    break;

  case 5:
    let num4 = Number(prompt("Enter value of n"));
    let sum2 = 0;

    for (let i = 1; i <= num4; i++) {
      sum2 += i;
    }

    console.log("Sum = " + sum2);
    break;

  default:
    console.log("Invalid choice");
}

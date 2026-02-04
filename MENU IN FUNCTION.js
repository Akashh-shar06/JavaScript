function armstrongnumber(){
    let num = Number(prompt("Enter the number :"));
    let temp = num;
    let sum = 0;
    
    while (temp > 0){
        let remainder = temp % 10;
        sum += remainder * remainder * remainder;
        temp = Math.floor(temp / 10);
    }
    
    if (sum === num)
        console.log(num + "is an armstrong number");
    else 
        console.log(num + "is not an armstrong number");
}

function fibonacciSeries(){
    let n = Number(prompt("Enter the value :"));
    let a = 0 , b = 1;
    
    if (n >= 1) console.log(a);
    if (n >= 2) console.log(b);
    
    for (let i = 3; i <= n; i++){
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

function ReverseNumber(){
    let num = Number(prompt("Enter the number :"));
    let rev = 0;
    
    while(num > 0){
        let reverse = num % 10;
        rev = rev * 10 + reverse;
        num = Math.floor(num / 10);
    }
    console.log("Reverse = " + rev);
}

function PalindromeNumber(){
    let num = Number(prompt("Enter the number :"));
    let temp = num;
    let rev = 0;
    
    while (temp > 0){
        let r = temp % 10;
        rev = rev * 10 + r;
        temp = Math.floor(temp / 10);
  }
    if (rev === num)
        console.log(num + "is palindrome ");
    else 
        console.log(num + "is NOT Palindrome");
}

function SumofNNumber(){
    let n = Number(prompt("enter the number :"));
    let sum = 0;
    
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    console.log("sum = " + sum);
}

function mainMenu() {
  let choice = Number(prompt(
    "MENU\n" +
    "1. Armstrong Number\n" +
    "2. Fibonacci Series\n" +
    "3. Reverse Number\n" +
    "4. Palindrome Number\n" +
    "5. Sum of N Numbers\n" +
    "Enter your choice:"
  ));
  
  switch (choice){
    case 1:
        armstrongnumber();
    break;
    
    case 2:
        fibonacciSeries();
    break;
    
    case 3:
        ReverseNumber();
    break;
    case 4:
        PalindromeNumber();
    break;
    
    case 5:
        SumofNNumber();
    break;
    
default:
      console.log("Invalid choice");
  }
}



mainMenu()

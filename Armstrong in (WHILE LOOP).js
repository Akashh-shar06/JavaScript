let num = Number(prompt("Enter the number"));
let temp = num;
let sum = 0;

while (temp > 0){
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = Math.floor(temp / 10);
}

if(sum == num){
    alert(sum + " is Armstrong Number")
}else{
    alert(sum + " is NOT Armstrong Number")   
}

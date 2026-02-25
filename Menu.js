<!DOCTYPE html>
<html>
<head>
    <title>Number Operations</title>
</head>
<body>

    <h2>Number Operations</h2>

    <input type="number" id="numberInput" placeholder="Enter a number">
    <br><br>

    <button onclick="Armstrong()">Armstrong</button>
    <button onclick="Palindrome()">Palindrome</button>
    <button onclick="reverseNumber()">Reverse</button>
    <button onclick="fibonacci()">Fibonacci</button>
    <button onclick="factorial()">Factorial</button>

    <div class="result">
        Result: <span id="result">0</span>
    </div>
    
<script>

function Armstrong() {
    let num = document.getElementById("numberInput").value;
    let sum = 0;
    let temp = num;
    let digit = num.length;

    while(temp > 0){
        let remainder = temp % 10;
        sum += Math.pow(remainder, digit);
        temp = parseInt(temp / 10);
    }

    if(sum == num)
        document.getElementById("result").innerHTML = num + " is an Armstrong number";
    else
        document.getElementById("result").innerHTML = num + " is NOT an Armstrong number";
}

function Palindrome() {
    let num = document.getElementById("numberInput").value;
    let reverse = num.split("").reverse().join("");

    if(num == reverse)
        document.getElementById("result").innerHTML = num + " is a Palindrome";
    else
        document.getElementById("result").innerHTML = num + " is NOT a Palindrome";
}

function reverseNumber() {
    let num = document.getElementById("numberInput").value;
    let reverse = num.split("").reverse().join("");
    document.getElementById("result").innerHTML = "Reverse of " + num + " is " + reverse;
}

function fibonacci() {
    let n = document.getElementById("numberInput").value;
    let a = 0, b = 1, next;
    let series = "";

    for(let i=0; i<n; i++){
        series += a + " ";
        next = a + b;
        a = b;
        b = next;
    }

    document.getElementById("result").innerHTML = "Fibonacci Series: " + series;
}

function factorial() {
    let n = document.getElementById("numberInput").value;
    let fact = 1;

    for(let i=1; i<=n; i++){
        fact *= i;
    }

    document.getElementById("result").innerHTML = "Factorial of " + n + " is " + fact;
}

</script>

</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
    <style>
        body {
            font-family: Arial;
            background-color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .box {
            background: white;
            padding: 20px;
            border: 2px solid #333;
            border-radius: 8px;
            text-align: center;
            width: 300px;
        }

        input {
            width: 90%;
            padding: 8px;
            margin: 5px 0;
        }

        button {
            margin: 5px;
            padding: 8px 12px;
            cursor: pointer;
        }

        .result {
            margin-top: 10px;
            font-weight: bold;
        }
    </style>
</head>
<body>

<div class="box">
    <h2>Calculator</h2>

    <input type="number" id="num1" placeholder="Enter first number">
    <input type="number" id="num2" placeholder="Enter second number">

    <div>
        <button onclick="add()">Add</button>
        <button onclick="subtract()">Sub</button>
        <button onclick="multiply()">Multiply</button>
        <button onclick="divide()">Divide</button>
        <button onclick="mod()">Mod</button>
    </div>

    <div class="result">
        Result: <span id="result">0</span>
    </div>
</div>

<script>
    function getValues() {
        let n1 = Number(document.getElementById("num1").value);
        let n2 = Number(document.getElementById("num2").value);
        return [n1, n2];
    }

    function add() {
        let [n1, n2] = getValues();
        document.getElementById("result").innerText = n1 + n2;
    }

    function subtract() {
        let [n1, n2] = getValues();
        document.getElementById("result").innerText = n1 - n2;
    }

    function multiply() {
        let [n1, n2] = getValues();
        document.getElementById("result").innerText = n1 * n2;
    }

    function divide() {
        let [n1, n2] = getValues();
        document.getElementById("result").innerText = n2 !== 0 ? n1 / n2 : "Cannot divide by 0";
    }

    function mod() {
        let [n1, n2] = getValues();
        document.getElementById("result").innerText = n2 !== 0 ? n1 % n2 : "Cannot mod by 0";
    }
</script>

</body>
</html>




What is Framework - React, Angular, Vue.js
what is tailwind in css 

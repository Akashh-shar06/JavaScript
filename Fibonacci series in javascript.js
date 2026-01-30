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

let Num = (prompt("Enter the value :"));
let a = 0, b = 1;

i = 3;
while (i <= Num) {
  let c = a + b;
  a = b;
  b = c;
  i++;

  console.log(a);
  console.log(b);
  console.log(c);
}

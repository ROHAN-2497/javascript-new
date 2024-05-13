let n = prompt("enter the number");
arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

let sum = arr.reduce((prev, curr) => {
  return prev + curr;
});
console.log(` Sum ${sum}`);

let factorial = arr.reduce((prev, curr) => {
  return prev * curr;
});
console.log(`Factorial ${factorial}`);

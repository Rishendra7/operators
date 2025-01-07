let a = Number(prompt("Enter the first number: "));
let b = Number(prompt("Enter the second number: "));
let c= Number(prompt("Enter the third number: "));
if (a > b && a > c) {
    console.log("a is the largest:", a);
} else if (b > a && b > c) {
    console.log("b is the largest:", b);
} else {
    console.log("c is the largest:", c);
}

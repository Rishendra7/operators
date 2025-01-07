let a = Number(prompt("Enter the first number: "));
let b = Number(prompt("Enter the second number: "));
let c= Number(prompt("Enter the third number: "));

switch (true) {
    case (a > b && a > c):
        console.log("a is the largest:", a);
        break;

    case (b > a && b > c):
        console.log("b is the largest:", b);
        break;

    case (c > a && c > b):
        console.log("c is the largest:", c);
        break;

    default:
        console.log("Two or more numbers are equal and largest.");
}

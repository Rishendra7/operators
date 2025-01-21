// console.log(10 + 10);
// console.log("10" + 10);//! concetanation
// console.log(10+20 +"100");
// console.log("hi" + 10+20);
// console.log("hi" + (10+20));

// console.log(10-5);
// console.log("10"-2);//! typecasting
// console.log("10"-"5");

// console.log(5*5);
// console.log("5"*2);//!typecasting
// console.log(10/2);
// console.log("10"/2);
// console.log(2**5);
// console.log("2"**10);

// let a =10;
// console.log(++a);//! pre-increment;
// console.log(a++);
// console.log(a);

// console.log(--a);//? pre-decremernt 
// console.log(a--);
// console.log(a);

// ! assignment operator (=)
// let a = 10;

// console.log(a+5);//! a= a+5 = 10+5 =15
//console.log(a-=5);//! a= a-5 = 10-5 = 5
//console.log(a*=5); //! a= a*5 = 10*5 = 50
//console.log(a/=5);//! a= a/5 = 10/5 = 2
// console.log(a%=2);

// ! relational/comparisional operator
// console.log(10 == 10);
// console.log("10" == 10);//true
// console.log(100 == 10);

// console.log(10 === 10);
// console.log("10" === 10);

// console.log(10 != 10);
// console.log("10" != 10);
// console.log(100 != 20);

// console.log(10 !== 10);
// console.log("10" !== 10);

// console.log(10 > 5);
// console.log(10 >= 10);
// console.log(10 < 20);
// console.log(20 <= 20);

// console.log(true && true);
// console.log((10 > 5) && (20 > 100));

// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

// console.log(!true);
// console.log(!false);


// console.log(10);
// console.log(20);
// console.log(30);
// setTimeout(() => {
//     console.lOg(40);
// }, 4000);
// console.log(50);
// console.log(60);


//Promise
let p1 = new Promise((resolve , reject) => {});
console.log(p1);

let p2 = new Promise((resolve , reject) => {
    resolve('Success');
});
console.log(p2);
p2.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
}).finally(() =>
    console.log('finally prinitng for both success and failure'))

let p3 = new Promise((resolve , reject) => {
    reject('Failed');
});
console.log(p3);
p3.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
}).finally(() =>
    console.log('finally prinitng for both success and failure'))

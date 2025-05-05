// // // alert("hello");

// // // function msg() {
// // //     alert("Hello from msg function!");
// // // }

// // let age = 18;
// // let x = 5;
// // let y = 6e536;
// // let istrue = true;
// // let arr = [1, 2, 3, 4, 5];
// // let obj = {
// //     name: "Ayush",
// //     age: 18,
// //     istrue: true
// // };
// // let func = function () {
// //     console.log("hello");
// // };
// // let nullvalue = null;
// // let undefinedvalue = undefined;
// // let symbol = Symbol("hello");
// // let bigInt = BigInt("1234567890123456789012345678901234567890");
// // let date = new Date().getMinutes();
// // let date1 = new Date().getSeconds();
// // let demo = `The sum of 2 and 3 is ${2 + 3}`;

// // console.log(demo);
// // console.log(age);
// // console.log(x);
// // console.log(y);
// // console.log(istrue);
// // console.log(arr);
// // console.log(obj);
// // console.log(func);
// // console.log(nullvalue);
// // console.log(undefinedvalue);
// // console.log(symbol);
// // console.log(bigInt);
// // console.log(date);
// // console.log(date1);

// // let X = 5;
// // let Y = 6;
// // console.log(X === Y);
// // console.log(X == Y);
// // console.log(X !== Y);

// // let num = prompt("Enter your age:");
// // if (num >= 18) {
// //     document.write("You are eligible to vote");
// // } else {
// //     document.write("You are not eligible to vote");

// // }
// // let num1 = prompt("Enter a number:");
// // num1 = Number(num1); // Convert input to number

// // if (isNaN(num1)) {
// //     document.write("The input is not a number");
// // } else if (num1 % 2 === 0) {
// //     document.write("The number is even");
// // } else {
// //     document.write("The number is odd");
// // }

// // let T = prompt("Enter a variable:");
// // console.log(typeof T); 

// // let input = prompt("Enter a number:");
// // let number = Number(input);



// // let num3= prompt("Enter a number:");
// // for (let i = 1; i <= 10; i++) {
// //     console.log(num3 + " * " + i + " = " + (num3 * i));
// // }

// // let num4 = prompt("Enter a number:");
// // let i = 1;
// // while(i<=10){
// //     console.log(num4 + "*" + i + " = " + (num4 * i));
// //     i++;
// // }

// let day = prompt ("Enter the day");
// switch (day){
//     case "1":
//         console.log("Monday");
//         break;
//     case "2":
//         console.log("Tuesday");
//         break;
//     case "3":
//         console.log("Wednesday");
//         break;
//     case "4":
//         console.log("Thursday");
//         break;
//     case "5":
//         console.log("Friday");
//         break;
//     case "6":
//         console.log("saturday");
//         break;
//     case "7":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("invalid day");
//         break;

    
// }

// obj = {name  : 'Ayush' , rollno : 18}
// obj.name 

// delete obj.name
// obj

// let unit = {}
// unit.names = "Ayush"  ;
// unit.rollno = 18;
// console.log(unit);
// for (i in unit){
//     console.log(i + " : " + unit[i]);
// }

// let unit1 = {
//     name: "Ayush",
//     rollno: 18
// };

// for (let [key, value] of Object.entries(unit1)) {
//     console.log(key + " : " + value);
// }
let user = prompt("Enter your username");
let pass = prompt("Enter your password");
let set={};
set.name = "Ayush";
set.password = 1234;

for (sets in set){
    if (user == set.name && pass == set.password){
        console.log("Login successful");
    }
    else{
        console.log("Login failed");
    }


} 
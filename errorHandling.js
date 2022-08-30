// console.log("Hello World");

//console.log("Hello World");
/* Thsis used
to define multiple-line comments.
3 var types;
const (fixed / cannot b changed)
let (block-based_)
var (function-based)
*/

// define a string variable called Name

// let name = 'Danial';  //let is a keyword
// name = 'Samia'; // in let variable v can change its data unlike const which cannot be changed like this.

// console.log(name);

// // What is the datatype for variable name?
// console.log(typeof(name));

/* 5 basic data-types called pre-emptive data-types are;
    1. Strings
    2. Numbers
    3. Boolean
    4. Undefined
    5. Null.
*/
// 1 to 3 above r main data-types.

// object, array - data-types that r used a lot!

// Boolean example;

// let isServerLive = false;
// if (isServerLive == true) {
//     console.log("Is Server Live? " + isServerLive)
// }
// else {console.log("Is Server Live? " + isServerLive)
// }

// create an object;

// let student = {
//     name: "Danial",
//     score: 10,
// }

// student.age = 35;            // add / update element in object
// student.qual = "Masters";
// student.city = "Karachi";
// student ['city'] = "Adelaide";  // another way to add / update element in an object
// student.Country = "Australia";

// console.log(student.age, student.qual)

// console.log("Student " + student.name + " scored " + student.score + " who is from " + student.city + ".")

// console.log(student)

// arrays in JS;

// hydariArray = ['Daddaa', 'Daadi', 'Baba', 'Mammaa', 'Aaraiz', 'Shahvaiz'];

// replace Baba with Babaa & add an element to this array;
// hydariArray[2] = 'Babaa';
// hydariArray.push(6);

// console.log(typeof(hydariArray))    // means array is also same data-type i.e. OBJECT.

// console.log(typeof(student))

//////////////////////////////////////////////////////////////////////////////////////////////////


// function mult2numbs(a,b,c) {
//     result1 = (-b + Math.sqrt(b*b - 4 * a * c)) / (2 * a);
//     result2 = (-b - Math.sqrt(b*b - 4 * a * c)) / (2 * a);
//     return[result1,result2];
// }
// mult2numbs(1, 4, 12)
// results = [result1, result2]
// console.log("The root of the quadratic eq. are " + mult2numbs(3,6,-9))
// // console.log("The root of the quadratic eq. are " + mult2numbs(2,4,-6))
// console.log("The root of the quadratic eq. are " + results[0] + " and " + results[1])
///////////////////////////////////////////////////////////////////////////////////////////////////
// Recursive function:

function factorialNum(x) {
    if(x == 0)
        return factCalc = 1;    
    else
        return factCalc = x * factorialNum(x - 1);  
}
factorialNum(5)
console.log("The factorial value of x is " + factCalc);
////////////////////////////////////////////////////////////////////////////////////////////////////

// // //function HAseebDanial(){
// //     try{
// //         console.log(" We are trying to catch an error ");
// //         errorhappenedsuddenly;
// //     }
// //     catch(err) {
// //         console.log("Error found" + err);
// //     }
// //     finally {
// //         console.log("This is alwaysto be used");
// //     }
// // }

// function helloAll() {
   
//     try {
//     console.log("this is a Hello All Method");
//     console.log("This function is still working");
//     throw new Error("this is a Hello Error");
    
// }
// catch(err) {
//     console.log("Error Caught " + err);
// }
// finally {
//     console.log("Always run this")
// }
// };
// helloAll()
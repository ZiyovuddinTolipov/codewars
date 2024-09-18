// let a = 12345678;

// function balancedNum(number) {
//     let b = number.toString().split("");
//     let left = 0;
//     let right = 0;
//     for (let i = 0; i < b.length / 2 - 1; i++) {
//         left += b[i] * 1;
//         right += b[b.length - 1 - i] * 1;
//     }
//     return left==right ?"Balanced":"Not Balanced";
// }
// balancedNum(12345678)

// function XO(str) {
//     let x = 0;
//     let o = 0;
//     str.toLowerCase().split("").forEach(item =>{
//         if(item == "x") x++;
//         if(item == "o") o++;
//     });
//     return x === o ? true : false;
// }
// console.log(XO("ooxX"));
// const equalize=a=>a.map(x=>("+"+(x-a[0])).replace("+-","-"))
// console.log(equalize([20,30,35,10]))

// const func = (a) => {
//     let even = [];
//     let odd = [];
//     a.forEach(item => {item % 2 === 0 ?even.push(item):odd.push(item);});
//     return even.length === 1 ? even[0] : odd[0];
// };

// const validatePIN=pin => (pin.toString().length==4 || pin.toString().length==6 ) && pin && typeof pin ==number>0? true : false;
// console.log(validatePIN("1234")); // return false

// function printerError(s) {
//     let nToZCount = 0;
//     let alphabets_n_to_z = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//     s.split("").filter(item => {
//         if (alphabets_n_to_z.includes(item)) nToZCount++;
//     })
//     return `${nToZCount}/${s.split("").length}`
// }
// console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz") )

// const createPhoneNumber = a => {
//     return "("+a.slice(0, 3).join("")+ ") " + a.slice(3, 6).join("") + "-" + a.slice(6).join("");
// }
// console.log(createPhoneNumber([0,1,2,3,4,5,6,7,8,9]))

// function arrayDiff(a, b) {
//     let newArr = [];
//     for (let i = 0; i < b.length; i++) {
//         for (let j = 0; j < a.length; j++) {
//             if(b[i]=a[j]){
//                 newArr.push(a[i])
//             }
//         }
//     }
//     return newArr;
// }
// console.log(arrayDiff([1, 2, 2, 3], [4,5]));

// function solution(number){
//     let result = 0;
//     for (let i = 0; i<number; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             result += i;
//         }
//     }
//     return result;
// }
// console.log(solution(10));

// function likes(names) {
//     switch (names.length) {
//         case 0:
//             return "no one likes this";
//         case 1:
//             return names[0] + " likes this";
//         case 2:
//             return names[0] + " and " + names[1] + " like this";
//         case 3:
//             return names[0] + ", " + names[1] + " and " + names[2] + " like this";
//         default:
//             return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
//     }
// }
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]))

// function findOdd(A) {
//     //happy coding!
//     let sum = 0;
//     for (let i = 0; i < A.length; i++) {
//         for (let q = 0; q < A.length; q++) {
//             A[i] == A[q] && ++sum;
//         }
//         if (sum % 2 == 1) {
//             return A[i];
//             break;
//         }else{
//             continue;
//         }
//         sum = 0
//     }
// }
// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])) // return 5 arraydagi toq elementlar sonlilarini qaytarish
// function solution(str){
//     let newStr = (str.length %=2)==1 ? str+"_" : str
//     let b = [];
//     for(let i = 0; i < str.length/2; i++){
//         b.push(newStr.slice(0,2))
//         newStr = newStr.slice(2)
//     }
//     return b;
// }
// console.log(solution('abcder'))

// const fn = (txt)=>{
//     let newArr =txt.split(' ');
//     for(let i = 0; i < newArr.length; i++){
//         if(newArr[i].length>5){
//             newArr.splice(i,1,newArr[i].split('').reverse().join(''));
//         }
//     }
//     return newArr.join(' ');
// }
// console.log(fn("Just kidding there is still one more"))

// function isValidWalk(walk) {
//     let x = 0, y = 0;
//     for (let i = 0; i < walk.length; i++) {
//         if (walk[i] === 'n') y++;
//         else if (walk[i] === 's') y--;
//         else if (walk[i] === 'e') x++;
//         else if (walk[i] === 'w') x--;
//     }
//     return (x === 0 && y === 0)? true: false;
// }
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));

// function findUniq(A) {
//     //happy coding!
//     let sum = 0;
//     for (let i = 0; i < A.length; i++) {
//         for (let q = 0; q < A.length; q++) {
//             A[i] == A[q] && ++sum;
//         }
//         if (sum === 1) {
//             return A[i];
//             break;
//         }else{
//             sum = 0
//             continue;
//         }
//     }
// }
// function findUniq(A) {
//     const freq = {};

//     // Count occurrences of each element
//     for (let i = 0; i < A.length; i++) {
//         freq[A[i]] = (freq[A[i]] || 0) + 1;
//     }

//     // Find and return the unique element
//     for (let i = 0; i < A.length; i++) {
//         if (freq[A[i]] === 1) {
//             return A[i];
//         }
//     }
// }

// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))

// function positiveSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(positiveSum([1,2,3,4,5]))

// function squareSum(numbers){
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum= sum + numbers[i]**2
//     }
//     return sum;
// }
// console.log(squareSum([0, 3, 4, 5]))
// function countSheeps(sheep) {
//     //TODO
//     return sheep.filter(Boolean).length;  // Boolean converts non-boolean values to false, and true values to true. So, we filter out false values and return the length of the resulting array.  //Happy coding!  //TODO
// }
// console.log(countSheeps([true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true]))

// let str = "where some sheep may n be missing from their place.";
// let arr = str.split(' ')
// arr[0]=arr[0].split('').reverse().join('')
// console.log(arr.join(' '));

// function twoSum(numbers, target) {
//     for (var i=0; i<numbers.length; i++){
//         for (var j=i+1; j<numbers.length; j++){
//             if (numbers[i] + numbers[j] == target)
//                 return [i, j];
//         }
//     }
// }
// console.log(twoSum([1234, 5678, 9012], 14690))
// function formatDuration(seconds) {
//     if (seconds === 0) return "now";

//     const units = [
//         { seconds: 31536000, name: "year" },
//         { seconds: 86400, name: "day" },
//         { seconds: 3600, name: "hour" },
//         { seconds: 60, name: "minute" },
//         { seconds: 1, name: "second" }
//     ];

//     const result = [];

//     for (const { seconds: unitSeconds, name } of units) {
//         const count = Math.floor(seconds / unitSeconds);
//         if (count > 0) {
//             result.push(`${count} ${name}${count > 1 ? "s" : ""}`);
//             seconds %= unitSeconds;
//         }
//     }

//     return result.length > 1
//         ? result.slice(0, -1).join(", ") + " and " + result[result.length - 1]
//         : result[0];
// }

// var maxSequence = function(arr) {
//     let max = 0;
//     let currentSum = 0;

//     for (let item of arr) {
//         currentSum = Math.max(item, currentSum + item);
//         max = Math.max(max, currentSum);
//     }

//     return max;
// }

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4,-9]));

// function sumTwoSmallestNumbers(n) {
//     let a = Math.min(...n)
//     n.splice(n.indexOf(), 1);
//     let b = Math.min(...n)
//     return a + b;
// }
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

// const  maps=(x)=>{
//     let newArr = [];
//     x.forEach((i) => newArr.push(i*2));
//     return newArr;}

// console.log(maps([4, 1, 1, 1, 4]))
// const  digitize=(n) => n.toString().split('').parseInt().reverse();

// console.log(digitize(35231)); //

// function duplicateCount(text) {
//     let lettrObj = {};
//     let duplicates = 0;

//     for (let char of text.toLowerCase()) {
//         if (lettrObj[char]) {
//             if (lettrObj[char] === 1) {
//                 duplicates++;
//             }
//             lettrObj[char]++;
//         } else {
//             lettrObj[char] = 1;
//         }
//     }
//     return duplicates;
// }

// console.log(duplicateCount("aabbcde"));

// function alphabetPosition(text) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     return text
//         .toLowerCase()
//         .split('')
//         .filter(char => alphabet.includes(char))
//         .map(char => alphabet.indexOf(char) + 1)
//         .join(' ');
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// function toCamelCase(str){
//     let newStr = str.replaceAll('_', '-').replaceAll('-',' ').split(' ');
//     for(let i = 1; i < newStr.length; i++){
//         newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
//     }
//     return newStr.join('');
// }
// console.log(toCamelCase('The-Stealth-Warrior'));

// var uniqueInOrder=function(iterable){
//     let arr;
//     if(Array.isArray(iterable)){
//         arr = iterable;
//     }else{
//         arr = iterable.split('');
//     }
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         arr[i] != arr[i+1]&& result.push(arr[i]);
//     }
//     return result
//     }
// console.log(uniqueInOrder([1,2,4]));

// function humanReadable(seconds) {
//     let hours = Math.floor(seconds / 3600);
//     let minutes = Math.floor((seconds % 3600) / 60);
//     let secs = seconds % 60;

//     hours = hours < 10 ? "0" + hours : hours;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     secs = secs < 10 ? "0" + secs : secs;

//     return `${hours}:${minutes}:${secs}`;
// }

// console.log(humanReadable(359999));
// function narcissistic(value) {
//     let digits = value.toString().split('').map(Number);
//     let sum = digits.reduce((acc, curr) => acc + Math.pow(curr, digits.length), 0);
//     return sum === value;
// }
// console.log(narcissistic(153));
// let bool=false;
// if(bool==true){
//     console.log("Yes");
// }else{
//     console.log("No");
// }

// snail = function(array) {
//     let newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         for(let j=0; j<array[i].length; j++){
//             newArr.push(array[0][j]);
//         }
//     }
//     return newArr;
// }
// console.log(snail( [[1,2,3],[4,5,6],[7,8,9]]));
// function groupByCommas(n) {

// }
// console.log(groupByCommas(100000));

// var sayGoodbye = function() {
//     console.log("Xayr");
// };
// sayGoodbye(); // TypeError: sayGoodbye is not a function
function disemvowel(str) {
  let newArr = str.split("");
  let txt = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != "a") {
      txt = txt + str[i];
    }
  }
  return str;
}

// function arrFunc(n){
//     let arr = []
//     for (let i = n; i >0; i--) {
//         arr.push(i)
//     }
//     return arr;
// }
// console.log(arrFunc(5));

function counter(){
    let a = 1;
    return function(){
        return a++
    }
}
const newCounter = ounter();
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
console.log(newCounter())
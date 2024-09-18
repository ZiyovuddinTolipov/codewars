// function moveZeros(arr) {
//     let newArr = [];
//     let zeroCount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]===0) {
//             ++zeroCount
//         } 
//         else {
//             newArr.push(arr[i])
//         }
//     }
//     for (let i = 0; i < zeroCount; i++) {
//         newArr.push(0);
//     }
//     return newArr
// }
// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));

// function pigIt(str) {
//     let punctuation = ['!', ',', "'", '"', '?'];
//     let newArr = str.split(' '); 
//     let txt = [];

//     for (let i = 0; i < newArr.length; i++) {
//         if (punctuation.includes(newArr[i])) {
//             txt.push(newArr[i]);
//         } else {
//             txt.push(newArr[i].slice(1) + newArr[i][0] + 'ay');
//         }
//     }

//     return txt.join(' ');
// }
// console.log(pigIt('Pig latin is cool'))

// function componentToHex(c) {
//     c = Math.max(0, Math.min(255, c));

//     let hex = c.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
// }

// function rgb(r, g, b) {
//     return (componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase();
// }
// console.log(rgb(34,4,12))

// function generateHashtag (str) {
//     let newArr = str.split(' ').filter(a=>a);
//     let newStr = ['#']
//     if (newArr.length>0) {
//         for(let i=0;i<newArr.length;i++) {
//             newStr.push(newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1));
//         }
//         return newStr.join('').length>=140 ? false :newStr.join('')
//     } else {
//         return false
//     }
// }
// console.log(generateHashtag("code" + " ".repeat(140) + "wars"))
// function rot13(message) {
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let result = '';

//     for (let i = 0; i < message.length; i++) {
//         let char = message[i];
//         let isUpperCase = char === char.toUpperCase();
//         char = char.toLowerCase(); 

//         if (alphabet.includes(char)) {
//             let index = alphabet.indexOf(char); 
//             let newIndex = (index + 13) % 26; 

//             result += isUpperCase ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
//         } else {
//             result += char; 
//         }
//     }

//     return result;
// }

// console.log(rot13('test'));
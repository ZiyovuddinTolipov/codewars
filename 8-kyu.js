// Find numbers which are divisible by given number
// function divisibleBy(n, d){
//     let newArr= []
//     n.map((a)=>{
//         a%2==0 && newArr.push(a)
//     })
//     return newArr;
// }
// console.log(divisibleBy([1,2,3,4,5,6], 2))

// Volume of a Cuboid
// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     return length * width * height;
//   }
// }

//
// const reverseSeq = n => {
//     let res = [];
//     for(let i = n; i=>0;i--){
//         res.push(i)
//     }
//     return res;
// };
// console.log(reverseSeq(5))

// function countPositivesSumNegatives(input) {
//     if (!input || input.length === 0) return []
//     let [a, b] = [0, 0];
//     input.forEach(num => {
//         num > 0 ? ++a : b +=num;
//     });
// return [a, b] 
// }
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

// const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((acc,n)=>acc+n,0)

// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))
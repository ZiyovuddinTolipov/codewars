// Are the numbers in order?
// function inAscOrder(arr) { 
//     let res = true;   
//     for (let i = 0; i < arr.length-1; i++) {
//         if(arr[i]>arr[i+1]){
//             res = false;
//             break;
//         }
//     }
//     return res;
// }
// console.log(inAscOrder([1, 2, 4, 7, 19]))

// function roots(a,b,c){
//     let d = b**2-4*a*c;
//     console.log(d)
//     const x1 = (-b-d**0.5)/(2*a);
//     const x2 = (-b+d**0.5)/(2*a);
//     if(d==0){
//         return x1+x2;
//     }else if(d>0){
//         return Math.ceil((x1+x2)*100)/100
//     } else {
//         return null
//     }
// }
// console.log(roots(1,-35,-23))
// function getSum(a, b) {
    //     let sum = 0;
    //     if (a < b) {
    //         for (let i = a; i <= b; i++) {
    //             sum = sum + i;
    //         }
    //     } else if (a > b) {
    //         for (let i = b; i <= a; i++) {
    //             sum = sum + i;
    //         }
    //     }else {
    //         sum =a
    //     }
    //     return sum;
    // }
    // console.log(getSum(0, -1))
    // function maskify(cc) {
    //     let cardCode = cc.toString()
    //     if(cardCode.length>4){
    //         let code = '';
    //         for (let i = 0; i <cardCode.length-4; i++) {
    //             code=code+'#'
    //         }
    //         cardCode = code+cardCode.split('').slice(-4).join('')
    //     }
    //     return cardCode;
    // }
    // console.log(maskify(123456789))

// function digitalRoot(n) {
//     if (n < 10) return n;
//     let sum = 0;
//     while (n > 0) {
//         sum += n % 10;
//         n = Math.floor(n / 10);
//     }
//     return digitalRoot(sum);
// }

// // Test cases
// console.log(digitalRoot(16));

// function whatCentury(year) {
//     let century = Math.ceil(year / 100);
//     let suffix = (century % 10 == 1 && century % 100 != 11) ? 'st' :
//             (century % 10 == 2 && century % 100 != 12) ? 'nd' :
//             (century % 10 == 3 && century % 100 != 13) ? 'rd' : 'th';
//     return century + suffix;
// }

// console.log(whatCentury("1234"))
// function handAngle(date) {
//     const hours = date.getHours() % 12;
//     const minutes = date.getMinutes();

//     const hourAngle = (hours * 30) + (minutes / 2);
//     const minuteAngle = minutes * 6;

//     const angle = Math.abs(hourAngle - minuteAngle);
//     return Math.min(angle, 360 - angle) * (Math.PI / 180);
// }

// const data = new Date();
// console.log(handAngle(data));

// function latestClock(a, b, c, d) {
//     return a+''+b+':'+c+''+d
// }
function findKey(nums) {
    let newArr = nums.map(num => {
        return num.toString().split(''); 
    });
    console.log(newArr)
    // let a= 0
    // for (let i = 0; i < newArr.length; i++) {
    //     for (let j = 0; j < newArr.length; j++) {
    //         for (let q = 0; q < newArr[i].length; q++) {
    //             console.log(a++) 
                
    //         }
    //     }
    // }
}
console.log(findKey([153456,123406,124456,323456,123458,123756]))



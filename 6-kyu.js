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


function whatCentury(year) {
    let century = Math.ceil(year / 100);
    let suffix = (century % 10 == 1 && century % 100 != 11) ? 'st' :
            (century % 10 == 2 && century % 100 != 12) ? 'nd' :
            (century % 10 == 3 && century % 100 != 13) ? 'rd' : 'th';
    return century + suffix;
}

console.log(whatCentury("1234"))
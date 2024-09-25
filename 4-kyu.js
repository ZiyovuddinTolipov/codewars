// function sumStrings(a,b) {
//     return  String(BigInt(a)+BigInt(b))  == 712577413488402631964821329 ? true : false
// }
// console.log( sumStrings('712569312664357328695151392', '8100824045303269669937'))

function multiply(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    let result = Array(num1.length + num2.length).fill(0);

    num1 = num1.split("").reverse().join("");
    num2 = num2.split("").reverse().join("");

    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            let product = (num1[i] - "0") * (num2[j] - "0"); 
            result[i + j] += product;
            result[i + j + 1] += Math.floor(result[i + j] / 10); 
            result[i + j] %= 10; 
        }
    }

    result = result.reverse();

    while (result[0] === 0) {
        result.shift();
    }

    return result.join("");
}

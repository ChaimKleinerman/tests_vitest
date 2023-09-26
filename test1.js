var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//q1
function lengthStr(str) {
    return str.length;
}
//q2
function isPalindrome(str) {
    const reverse1 = str.split('').reverse().join('');
    const reverse2 = str;
    console.log(reverse1);
    console.log(reverse2);
    if (reverse2 === reverse1)
        return true;
    return false;
}
//q3
function increaseNumber(arr) {
    return arr.sort((a, b) => a - b);
}
//q4
const sqrt = (num) => {
    if (num < 0)
        throw new Error('this is invalid number');
    else
        return (num ** (1 / 2));
};
//q5
const sumArray = (arr) => {
    let count = 0;
    for (const num of arr) {
        count += num;
    }
    return count;
};
//q6
const fetchUserData = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = yield response.json(); // Parse the response body as JSON
        return data;
    });
};
fetchUserData(2);
//q7
function fibonacci(numbers) {
    if (numbers.length < 3)
        throw new Error('this is not fibonacci');
    for (let index = 0; index < numbers.length - 2; index++) {
        if (!(numbers[index] + numbers[index + 1] === numbers[index + 2]))
            throw new Error('this is not fibonacci');
    }
    return numbers[numbers.length - 2] + numbers[numbers.length - 1];
}
export { lengthStr, isPalindrome, increaseNumber, sqrt, sumArray, fetchUserData, fibonacci };

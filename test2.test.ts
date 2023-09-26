//modules
import { test, expect } from "vitest";
import {
    lengthStr,
    isPalindrome,
    increaseNumber,
    sqrt,
    sumArray,
    fetchUserData,
    fibonacci,
} from "./test1";
import { User } from "./types";
//q1

test("return the length of str", () => {
    expect(lengthStr("lkj")).toBe(3);
});
//q2
test("return is palindrome", () => {
    expect(isPalindrome("a")).toBe(true);
});
//q3
test("return order increase array", () => {
    expect(increaseNumber([3, 2, 1])).toEqual([1, 2, 3]);
});
//q4
test("return root positive", () => {
    expect(sqrt(4)).toBe(2);
});

test("return root err negative", () => {
    expect(() => sqrt(-1)).toThrow("this is invalid number");
});
//q5
test("return sum of array ", () => {
    expect(sumArray([1, 3])).toBe(4);
});

test("if num grater then 9 ", () => {
    expect(sumArray([4, 6])).toBeGreaterThan(9);
});
//q6
test("check if it returns user correctly", async () => {
    const user = await fetchUserData(2);
    expect(user).toHaveProperty("name");
});
//q7
test("check if it is fibonacci ", () => {
    expect(fibonacci([1, 2, 3])).toBe(5);
});

test("check if it return error this is not fibonacci", () => {
  
    expect(()=>fibonacci([1,2,3,4])).toThrow("this is not fibonacci");
});

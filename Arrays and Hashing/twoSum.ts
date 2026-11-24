/**
 * NeetCode 003
 * LeetCode Problem 1: Two Sum
 * 
 * Question:
 * You are given an array of integers nums and an integer 
 * target, return indices of the two numbers such that they 
 * add up to target.
 * 
 * You may assume that each input would have exactly 
 * one solution, and you may not use the same element 
 * twice.
 * 
 * You can return the answer in any order.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [map.get(nums[i])!, i];
        }

        map.set(target - nums[i], i);
    }

    return [];
}

console.log(
    `nums = [3,4,5,6], target = 7`,
    twoSum([3, 4, 5, 6], 7)
);
console.log(
    `nums = [4,5,6], target = 10`,
    twoSum([4, 5, 6], 10)
);
console.log(
    `nums = [3,2,4], target = 6`,
    twoSum([3, 2, 4], 6)
);
console.log(
    `nums = [5,5], target = 10`,
    twoSum([5, 5], 10)
);

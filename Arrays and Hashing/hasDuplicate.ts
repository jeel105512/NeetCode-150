/**
 * NeetCode 001
 * LeetCode 217: Contains Duplicate
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
function hasDuplicate(nums: number[]): boolean {
    const set: Set<number> = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }

        set.add(nums[i]);
    }

    return false;
};

console.log(
    `nums = [1, 2, 3, 3]`,
    hasDuplicate([1, 2, 3, 3])
);
console.log(
    `nums = [1, 2, 3, 4]`,
    hasDuplicate([1, 2, 3, 4])
);
/**
 * NeetCode 004
 * LeetCode Problem 49: Group Anagrams
 * 
 * Question:
 * Given an array of strings strs, group the anagrams 
 * together. You can return the answer in any order.
 * 
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs: string[]): string[][] {
    function frequencyString(str: string): string {
        const frequency: number[] = new Array<number>(26).fill(0);

        for (let i = 0; i < str.length; i++) {
            frequency[str.charCodeAt(i) - 97] += 1;
        }
        
        return frequency.join("#");
    }

    const map: Map<string, string[]> = new Map<string, string[]>();

    for (let i = 0; i < strs.length; i++) {
        const freq: string = frequencyString(strs[i]);

        if (!map.has(freq)) {
            map.set(freq, []);
        }

        map.get(freq)!.push(strs[i]);
    }
    
    return [...map.values()];
};

console.log(
    `strs = ["act","pots","tops","cat","stop","hat"]`,
    groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"])
);
console.log(
    `strs = ["x"]`,
    groupAnagrams(["x"])
);
console.log(
    `strs = [""]`,
    groupAnagrams([""])
);
console.log(
    `strs = ["bdddddddddd","bbbbbbbbbbc"]`,
    groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"])
);

/**
 * NeetCode 002
 * LeetCode Problem 242: Valid Anagram
 * 
 * Question:
 * Given two strings s and t, return true if t is an 
 * anagram of s, and false otherwise.
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let frequency: number[] = new Array<number>(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        frequency[s.charCodeAt(i) - 97] += 1;
        frequency[t.charCodeAt(i) - 97] -= 1;
    }

    for (let j = 0; j < 26; j++) {
        if (frequency[j] !== 0) return false;
    }

    return true;
};



console.log(
    `s = "racecar", t = "carrace"`,
    isAnagram("racecar", "carrace")
);
console.log(
    `s = "jar", t = "jam"`,
    isAnagram("jar", "jam")
);
console.log(
    `s = "x", t = "x"`,
    isAnagram("x", "x")
);
console.log(
    `s = "xx", t = "bb"`,
    isAnagram("xx", "bb")
);

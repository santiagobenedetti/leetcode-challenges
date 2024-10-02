// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] | undefined {
  // O(n^2) solution using brute force
  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = 0; j < nums.length; j++) {
  //         if (i == j) break
  //         if (nums[i] + nums[j] == target) return [i, j]
  //     }
  // }

  // O(n) solution using hashmap
  let seen = new Map();
  for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (seen.has(diff)) {
          return [seen.get(diff), i];
      } else {
          seen.set(nums[i], i);
      }
  }
};
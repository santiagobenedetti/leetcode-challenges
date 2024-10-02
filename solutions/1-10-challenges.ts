// 1.TwoSum
// https://leetcode.com/problems/two-sum/description/
//
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

// 2.Add two numbers
// https://leetcode.com/problems/add-two-numbers/description/
//
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode();
    let current = dummy;
    let carry = 0;
    let p = l1;
    let q = l2;
    while (p != null || q != null) {
        let x = (p != null) ? p.val : 0;
        let y = (q != null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummy.next;
};
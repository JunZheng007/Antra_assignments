function q11(nums) {
    nums.sort((a, b) => a - b);
    return [nums[1], nums[nums.length - 2]];
}

console.log(q11([1, 2, 3, 4, 5]));

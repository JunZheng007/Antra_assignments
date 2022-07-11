function q18(nums, target) {
    let left = 0,
        right = nums.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return true;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
        console.log(left, right, mid);
    }
    return false;
}

console.log(q18([1, 2, 3, 4, 5, 6, 7], 5));

function q21(nums, length) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        addElement([nums[i]], i + 1);
    }
    return res;

    function addElement(s, index) {
        if (s.length === length) {
            res.push([...s]);
        } else {
            s.push(nums[index]);
            addElement(temp, index + 1);
            s.pop();
        }
        return;
    }
}

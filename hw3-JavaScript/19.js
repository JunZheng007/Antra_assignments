function q19(array, targetNum) {
    const largerNums = [];
    for (let num of array) {
        if (num > targetNum) largerNums.push(num);
    }
    return largerNums;
}

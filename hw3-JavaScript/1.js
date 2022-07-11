function q1(num) {
    let res = 0;
    while (num) {
        res *= 10;
        res += num % 10;
        num = Math.floor(num / 10);
    }
    return res;
}

console.log(q1(32243));

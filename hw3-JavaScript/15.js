function q15(b, n) {
    if (n === 0) return 1;
    let res = 1;
    for (let i = 0; i < n; i++) {
        res *= b;
    }
    return res;
}

console.log(q15(4, 3));

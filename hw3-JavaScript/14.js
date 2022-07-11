function q14(num) {
    const coins = [25, 10, 5, 2, 1],
        res = [];
    for (coin of coins) {
        for (let i = 0; i < Math.floor(num / coin); i++) {
            res.push(coin);
        }
        num %= coin;
    }
    return res;
}

console.log(q14(46));

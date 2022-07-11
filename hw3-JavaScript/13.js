function q12(num) {
    const factors = [1];
    for (
        let i = 2;
        divisors.length === 1 || i < divisors[divisors.length - 1];
        i++
    ) {
        if (i === divisors[divisors.length - 1]) break;
        if (num % i === 0) {
            divisors.push(num / i);
            divisors.unshift(i);
        }
    }

    return divisors;
}

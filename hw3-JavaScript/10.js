function q10(n) {
    const matrix = new Array(n).fill(null).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        matrix[i][i] = 1;
    }
    return matrix;
}

console.log(q10(5));

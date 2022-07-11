function q6(str) {
    return str
        .split(" ")
        .reduce((prev, cur) => (cur.length > prev.length ? cur : prev));
}

console.log(q6("'Web Development Tutorial"));

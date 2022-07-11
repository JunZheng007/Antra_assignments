function q5(str) {
    return str
        .split(" ")
        .map((s) => s[0].toUpperCase() + s.substring(1))
        .join(" ");
}

console.log(q5("the quick brown fox"));

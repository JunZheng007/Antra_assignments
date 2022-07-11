function q7(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let res = 0;
    for (char of str) {
        if (vowels.find((vowel) => vowel === char)) {
            res++;
        }
    }
    return res;
}

console.log(q7("the quick brown fox"));

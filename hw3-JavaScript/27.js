function q27(str) {
    let maxLength = 1,
        start = 0;

    // Nested loop to mark start and end index
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let flag = 1;

            // Check palindrome
            for (let k = 0; k < (j - i + 1) / 2; k++)
                if (str[i + k] != str[j - k]) flag = 0;

            // Palindrome
            if (flag != 0 && j - i + 1 > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }
    }
    return maxLength;
}

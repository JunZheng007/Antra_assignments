function q3(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        res.push(str[i]);
        addChar(str[i], i + 1);
    }
    return res;

    function addChar(s, index) {
        if (index < str.length) {
            let temp = s + str[index];
            res.push(temp);
            addChar(temp, index + 1);
        }
        return;
    }
}

console.log(q3("dog"));

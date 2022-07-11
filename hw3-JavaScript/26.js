function q26(phrase) {
    let allSubstrings = [];
    let substring = "";
    for (let letter of phrase) {
        //reset the substring because there's a repeat character
        if (substring.includes(letter)) {
            allSubstrings.push(substring);
            substring = "";
        } else {
            substring += letter;
        }
    }
    allSubstrings.push(substring);
    let biggerSubstring = "";
    for (let i = 0; i < allSubstrings.length; i++) {
        if (allSubstrings[i].length > biggerSubstring.length)
            biggerSubstring = allSubstrings[i];
    }
    return biggerSubstring;
}

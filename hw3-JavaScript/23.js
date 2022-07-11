function q23(characters) {
    //do this with a hashmap to keep track of the values.
    const repeatedChars = new Map();
    for (let char of characters) {
        //increment value or set it to 1 if it's undefined.
        repeatedChars.set(char, repeatedChars.get(char) + 1 || 1);
    }
    let no_repeats = "";
    for (let [key, value] of repeatedChars) {
        // if the value is 1, this is the first letter that has not been repeated
        if (value == 1) {
            no_repeats = key;
            break;
        }
    }
    return no_repeats;
}

function q22(word, key) {
    let regex = RegExp(key, "g");
    let times = word.match(regex);
    return times.length;
}

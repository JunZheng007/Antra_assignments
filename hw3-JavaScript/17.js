function q17(str) {
    const map = new Map();
    for (const char of str) {
        if (map.has(char)) map.set(char, map.get(char) + 1);
        else map.set(char, 1);
    }
    return map;
}

console.log(q17("thequickbrownfoxjumpsoverthelazydog"));

function q16(str) {
    return new Array(...new Set(str.split(""))).join("");
}

console.log(q16("thequickbrownfoxjumpsoverthelazydog"));

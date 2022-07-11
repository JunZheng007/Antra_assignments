function q20(length) {
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const characterArray = characters.split("");
    let uniqueString = "";
    for (let i = 0; i < length; i++) {
        uniqueString +=
            characterArray[Math.floor(Math.random() * characterArray.length)];
    }
    return uniqueString;
}

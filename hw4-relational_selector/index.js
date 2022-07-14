const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach",
    g: "gesdrwesf",
};

const letter = document.getElementById("letter");
const word = document.getElementById("word");

Object.entries(state).forEach(([key, value]) => {
    const letterOption = document.createElement("option");
    const wordOption = document.createElement("option");
    letterOption.value = key;
    letterOption.innerHTML = key;
    wordOption.value = value;
    wordOption.innerHTML = value;
    letter.appendChild(letterOption);
    word.appendChild(wordOption);
});

letter.onchange = (e) => {
    word.value = state[e.target.value];
};

word.onchange = (e) => {
    console.log(e.target.value);
    letter.value = Object.keys(state).find((key) => {
        return state[key] === e.target.value;
    });
};

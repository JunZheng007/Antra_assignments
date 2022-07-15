export const View = (() => {
    const domstr = {
        moviesContainer: "#moviesContainer",
        nextButton: "#nextButton",
    };

    const render = (ele, tmpl) => {
        ele.innerHTML = tmpl;
    };

    const createTmpl = (arr) => {
        let tmpl = "";
        arr.forEach((movie, index) => {
            if (index > 3) {
                return;
            }
            tmpl += `
            <div class="movie">
                <img src=${movie.imgUrl}>
                <p>${movie.name}</p>
                <p>Info: ${movie.outlineInfo}</p>
            </div>
            `;
        });
        return tmpl;
    };

    const createButton = (type) => {
        const code = type === "next" ? "&#8250;" : "&#8249;";
        const className = type === "next" ? "nextButton" : "prevButton";
        let button = `<button class=${className}>${code}</button>`;
        return button;
    };

    return {
        domstr,
        render,
        createTmpl,
        createButton,
    };
})();

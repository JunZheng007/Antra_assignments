export const Api = (() => {
    const baseUrl = "http://localhost:4232";
    const path = "/movies";

    const getMovies = () => {
        return fetch(baseUrl + path).then((res) => res.json());
    };

    return {
        getMovies,
    };
})();

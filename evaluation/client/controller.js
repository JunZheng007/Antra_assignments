import { Model } from "./model.js";
import { View } from "./view.js";

export const Controller = ((model, view) => {
    const state = new model.State();

    const init = () => {
        model.getMovies().then((movies) => {
            state.movies = movies;
        });
        nextMovies();
        prevMovies();
    };

    const nextMovies = () => {
        const moviesContainer = document.querySelector(
            view.domstr.moviesContainer
        );
        moviesContainer.addEventListener("click", (event) => {
            if (event.target.className === "nextButton") {
                state.firstMovie += 1;
            }
        });
    };

    const prevMovies = () => {
        const moviesContainer = document.querySelector(
            view.domstr.moviesContainer
        );
        moviesContainer.addEventListener("click", (event) => {
            if (event.target.className === "prevButton") {
                state.firstMovie -= 1;
            }
        });
    };

    return {
        init,
        nextMovies,
    };
})(Model, View);

import { Api } from "./api.js";
import { View } from "./view.js";

export const Model = ((api, view) => {
    const { getMovies } = api;

    class State {
        #movies = [];
        #totalMovies = 0;
        #firstMovie = 0;

        get movies() {
            return this.#movies;
        }

        set movies(movies) {
            this.#movies = movies;
            this.#totalMovies = movies.length;
            this.renewMovies();
        }

        get firstMovie() {
            return this.#firstMovie;
        }

        set firstMovie(num) {
            this.#firstMovie =
                num === -1 ? this.#totalMovies - 1 : num % this.movies.length;
            this.renewMovies();
        }

        renewMovies() {
            const moviesContainer = document.querySelector(
                view.domstr.moviesContainer
            );
            const start = this.#firstMovie;
            let showMovies = [];
            for (let i = 0; i < 4; i++) {
                showMovies.push(this.#movies[(start + i) % this.#totalMovies]);
            }
            let tmpl = view.createTmpl(showMovies);

            tmpl += view.createButton("next");
            tmpl += view.createButton("prev");

            view.render(moviesContainer, tmpl);
        }
    }

    return {
        getMovies,
        State,
    };
})(Api, View);

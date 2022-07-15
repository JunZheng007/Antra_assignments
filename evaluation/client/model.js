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
            this.#firstMovie = num;
            this.renewMovies();
        }

        renewMovies() {
            const moviesContainer = document.querySelector(
                view.domstr.moviesContainer
            );
            let start =
                this.#firstMovie + 4 > this.#totalMovies
                    ? this.totalMovies - 4
                    : this.#firstMovie;
            let tmpl = view.createTmpl(this.movies.slice(start, start + 4));
            if (start === 0) tmpl += view.createButton("next");
            else if (start === this.#totalMovies - 4)
                tmpl += view.createButton("prev");
            else {
                tmpl += view.createButton("next");
                tmpl += view.createButton("prev");
            }
            view.render(moviesContainer, tmpl);
        }
    }

    return {
        getMovies,
        State,
    };
})(Api, View);

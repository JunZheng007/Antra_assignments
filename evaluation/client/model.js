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
            console.log(movies);
            this.renewMovies();
        }

        get firstMovie() {
            return this.#firstMovie;
        }

        set firstMovie(num) {
            this.#firstMovie = num;
            console.log(this.#firstMovie);
            this.renewMovies();
        }

        renewMovies() {
            const moviesContainer = document.querySelector(
                view.domstr.moviesContainer
            );
            let start = this.#firstMovie;
            // this.#firstMovie + 4 > this.#totalMovies
            //     ? this.totalMovies - 4
            //     : this.#firstMovie;
            console.log(start);
            let tmpl = view.createTmpl(this.movies.slice(start, start + 4));
            if (start === 0) tmpl += view.createButton("next");
            else if (start === this.#totalMovies - 4)
                tmpl += view.createButton("prev");
            else {
                tmpl += view.createButton("next");
                tmpl += view.createButton("prev");
            }
            view.render(moviesContainer, tmpl);

            // const nextButton = document.querySelector(view.domstr.nextButton);
            // console.log(nextButton);
            // nextButton.addEventListener("click", (event) => {
            //     this.#firstMovie += 1;
            //     console.log(this.#firstMovie, start);
            // });
        }
    }

    return {
        getMovies,
        State,
    };
})(Api, View);

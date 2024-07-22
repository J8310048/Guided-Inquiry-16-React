import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MovieResults extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <h1 className="text-white font-mono text-center">
          Type in the Search bar!
        </h1>
        <ul className="flex flex-auto text-white font-mono phonemin:grid grid-flow-row grid-cols-9 relative justify-center">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <li key={movie.id}>
                <NavLink to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-3xl"
                  />
                  {movie.title}
                </NavLink>
              </li>
            ))
          ) : (
            <li className="col-start-5 col-end-6">No results found</li>
          )}
        </ul>
      </div>
    );
  }
}

export default MovieResults;

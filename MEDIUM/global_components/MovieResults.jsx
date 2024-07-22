import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MovieResults extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <h1 className="text-white text-center font-mono">
          Here are your Results!
        </h1>
        <ul className="flex flex-auto text-white text-center font-mono phonemin:grid grid-flow-row grid-cols-10 mx-0 relative">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <li key={movie.id}>
                <NavLink to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`}
                    alt={movie.title}
                  />
                  {movie.title}
                </NavLink>
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      </div>
    );
  }
}

export default MovieResults;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MovieResults extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <h1>Here are your Results!</h1>
        <ul>
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

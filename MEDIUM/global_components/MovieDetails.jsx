import axios from "axios";
import React, { Component } from "react";

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: null,
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split("/")[2];
    this.MovieSynopsis(id);
  }

  MovieSynopsis(id) {
    console.log(this.props);

    axios
      .get(`http://localhost:5000/details/${id}`)
      .then((response) => {
        this.setState({ movie: response.data });
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }

  render() {
    const { movie } = this.state;
    if (!movie) {
      return <div>Loading...</div>;
    }
    return (
      <html className="w-full h-screen bg-blue-950 text-white">
        <div className="flex flex-col items-center ml-96 mr-96">
          <img
            src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`}
            alt={movie.title}
          />
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>{movie.release_date}</p>
        </div>
      </html>
    );
  }
}

export default MovieDetails;

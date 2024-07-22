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
      <html className="w-full h-screen bg-blue-950 text-white font-mono">
        <div className="flex flex-row items-center pt-40 pl-96 pr-96">
          <img
            src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`}
            alt={movie.title}
            className="rounded-3xl"
          />
          <div className="bg-black rounded-3xl text-center pt-14 pb-14">
            <h1 className="text-3xl">{movie.title}</h1>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      </html>
    );
  }
}

export default MovieDetails;

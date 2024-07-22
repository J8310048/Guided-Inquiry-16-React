import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import MovieSearch from "../global_components/MovieSearch";
import MovieResults from "../global_components/MovieResults";
import MovieDetails from "../global_components/MovieDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [], // Ensure movies is initialized as an empty array
    };
  }

  handleSearch = (query) => {
    axios
      .get(`http://localhost:5000/search?q=${query}`)
      .then((response) => {
        this.setState({ movies: response.data.results });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MovieSearch onSearch={this.handleSearch} />
                  <MovieResults movies={this.state.movies} />
                </>
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

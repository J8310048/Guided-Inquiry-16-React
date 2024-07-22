import React, { Component } from "react";

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchResults: e.target.value });
  };

  handleSubmission = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.searchResults);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <input
          type="text"
          value={this.state.searchResults}
          onChange={this.handleChange}
          placeholder="Search"
        />
        <button type="submit" className="border-2 border-solid border-black">
          Find
        </button>
      </form>
    );
  }
}

export default MovieSearch;

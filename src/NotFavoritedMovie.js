import React, { Component } from 'react';


class NotFavoritedMovie extends Component {
  render() {
    return (
      <div>
        <h2>{ this.props.moviename }</h2>
        <p>None of the current users liked this movie</p>
      </div>
    )
  }
}

export default NotFavoritedMovie


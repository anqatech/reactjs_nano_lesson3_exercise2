import React, { Component } from 'react';


class FavoritedMovieList extends Component {
  render() {
    const profiles = this.props.filteredProfiles

    return (
      <div>
        <h2>{ this.props.moviename }</h2>
        <p>Liked By:</p>
        <ul>
          {profiles.map((profile) => {
              const userObject = this.props.users[profile.userID]
              return (
                <li key={ this.props.movieid + profile.id }>{ userObject.name }</li>
              )
          })}
        </ul>
      </div>
    )
  }
}

export default FavoritedMovieList

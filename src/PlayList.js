import React, { Component } from 'react';

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      playList: []
    };
  }

  componentDidMount() {
    fetch("/api/playlist")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            playList: result.playlist
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, playList } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
         {playList.map(track => (
           <li key={track.songTitle}>
             {track.songTitle} * {track.artist}
           </li>
         ))}
        </ul>
      );
    }
  }
}

export default PlayList;

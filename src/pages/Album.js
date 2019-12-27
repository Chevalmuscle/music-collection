import React from "react";
import { fetchAlbum } from "../api.js";

export default class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: undefined,
    };
  }

  componentDidMount() {
    fetchAlbum(this.props.match.params.id).then(album =>
      this.setState({ album: album }),
    );
  }

  render() {
    const album = this.state.album;
    if (album === undefined) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <img src={album.cover} alt={album.title}></img>
          <div>Title: {album.title}</div>
          <div>Year: {album.year}</div>
          <div>
            Artists:
            <ul>
              {album.artists.map((artist, index) => (
                <li key={index}>{artist}</li>
              ))}
            </ul>
          </div>
          <div>Genre: {album.genre}</div>
          <div>
            Styles:
            {album.styles.map((style, index) => (
              <span key={index}>{style} </span>
            ))}
          </div>
          <div>
            Tracklist:
            <ol>
              {album.trackList.map((track, index) => (
                <li key={index}>{track}</li>
              ))}
            </ol>
          </div>
          <div>
            Other infos: <div>{album.infos}</div>
          </div>
        </div>
      );
    }
  }
}

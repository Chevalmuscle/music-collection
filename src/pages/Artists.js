import React from "react";
import { fetchArtists } from "../api.js";

export default class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };
  }

  componentDidMount() {
    fetchArtists().then(artists => this.setState({ artists: artists }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.artists.map((artist, artistIndex) => (
            <li key={artistIndex}>
              <div>{artist.artist}</div>
              <ul>
                {artist.albums.map((album, albumIndex) => (
                  <li key={albumIndex}>
                    <a href={`/albums/${album._id.$oid}`}>{album.title}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

import React from "react";
import { fetchArtistByName } from "../api";

import AlbumsPage from "./Albums";

export default class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: undefined,
    };
  }

  componentDidMount() {
    fetchArtistByName(this.props.match.params.name).then(artist =>
      this.setState({ artist: artist }),
    );
  }

  render() {
    const artist = this.state.artist;
    if (artist === undefined) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>{artist.name}</h1>
          <AlbumsPage albums={artist.albums} />
        </div>
      );
    }
  }
}

import React from "react";
import { fetchAlbums } from "./api.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentDidMount() {
    fetchAlbums().then(albums => this.setState({ albums }));
  }

  render() {
    console.log(this.state.albums);
    return (
      <div>
        {this.state.albums.map((album, index) => (
          <div key={index}>
            <img src={album.cover} alt={album.title}></img>
          </div>
        ))}
      </div>
    );
  }
}

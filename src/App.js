import React from "react";
import { fetchAlbums } from "./api.js";
import "./App.css";

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
      <div class="album-covers">
        {this.state.albums.map((album, index) => (
          <div key={index} class="album">
            <img
              src={album.cover}
              alt={album.title}
              width="300"
              height="300"
            ></img>
            <div class="album-info-wrap">
              <div class="album-info">
                <div class="album-title">{album.title}</div>
                <div>
                  {album.artists[0]} - {album.year}
                </div>

                <div>{album.genre}</div>
                <div>
                  <a class="see-album-page" href="#">
                    more
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

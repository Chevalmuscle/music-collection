import React from "react";
import { fetchAlbums } from "../api.js";
import "./Albums.css";

export default class Albums extends React.Component {
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
    return (
      <div className="album-covers">
        {this.state.albums.map((album, index) => (
          <div key={index} className="album">
            <img
              src={album.cover}
              alt={album.title}
              width="300"
              height="300"
            ></img>
            <div className="album-info-wrap">
              <div className="album-info">
                <div className="album-title">{album.title}</div>
                <div>
                  {album.artists[0]} - {album.year}
                </div>

                <div>{album.genre}</div>
                <div>
                  <a className="see-album-page" href={`/albums/${album._id.$oid}`}>
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

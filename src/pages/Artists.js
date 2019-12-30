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
          {this.state.artists.map(artists => (
            <li>
              <div>{artists}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

import React from "react";

export default class Album extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/albums">album collection</a>
          </li>
          <li>
            <a href="/artists">artists</a>
          </li>
        </ul>
      </div>
    );
  }
}

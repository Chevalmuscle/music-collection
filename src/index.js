import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import App from "./App";
import Albums from "./Components/Albums";
import Album from "./Components/Album";
import Artists from "./Components/Artists";
import Artist from "./Components/Artist";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/albums" component={Albums} />
      <Route exact path="/albums/:id" component={Album} />
      <Route exact path="/artists" component={Artists} />
      <Route exact path="/artists/:name" component={Artist} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();

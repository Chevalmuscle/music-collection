import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import App from "./App";
import Albums from "./pages/Albums";
import Album from "./pages/Album";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/albums" component={Albums} />
      <Route exact path="/albums/:id" component={Album} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();

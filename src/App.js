import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import UnderConstruction from "./UnderConstruction";

library.add(fab, fas);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={UnderConstruction} />
      </Switch>
    </Router>
  );
}

export default App;

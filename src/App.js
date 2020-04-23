import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Mens from "./components/Mens";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route exact path="/mens-apparel-shop">
            <Mens />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

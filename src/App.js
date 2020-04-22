import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

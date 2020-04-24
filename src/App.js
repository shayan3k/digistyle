import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Mens from "./components/Mens";
import ProductPage from "./components/ProductPage";

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
          <Route exact path="/item">
            <ProductPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

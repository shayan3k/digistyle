import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Mens from "./components/Mens";
import Categories from "./components/Categories";
import ProductPage from "./components/ProductPage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Brands from "./components/Brands";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route exact path="/men">
            <Mens />
          </Route>
          <Route exact path="/item">
            <ProductPage />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
          <Route exact path="/loginpanel">
            <Login />
          </Route>
          <Route exact path="/dashboardpanel">
            <Dashboard />
          </Route>
          <Route exact path="/brands">
            <Brands />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

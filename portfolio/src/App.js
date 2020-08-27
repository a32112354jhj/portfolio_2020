import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page01 from "./page/page01";
import Page02 from "./page/page02";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/Page01">
            <Page01 />
          </Route>
          <Route exact path="/Page02">
            <Page02 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

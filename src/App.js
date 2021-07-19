import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter className="app">
      <div className="ogo">
        <Navbar />
        <Container maxWidth="xl">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" component={Auth} />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle } from "./styles";

import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import StatisticsResult from "./pages/StatisticsResult";
import Versus from "./pages/Versus";
import VersusResult from "./pages/VersusResult";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/statistics">
            <Statistics />
          </Route>
          <Route exact path="/statisticsResult">
            <StatisticsResult />
          </Route>
          <Route exact path="/versus">
            <Versus />
          </Route>
          <Route exact path="/versusResult">
            <VersusResult />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer newestOnTop={true} autoClose={3000} />
      <GlobalStyle />
    </div>
  );
}

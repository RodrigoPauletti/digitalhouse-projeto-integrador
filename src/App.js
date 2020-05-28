import React from "react";

import { GlobalStyle } from "./styles";

// import Home from "./pages/Home";
// import Statistics from "./pages/Statistics";
// import StatisticsResult from "./pages/StatisticsResult";
// import Versus from "./pages/Versus";
import VersusResult from "./pages/VersusResult";

export default function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Statistics /> */}
      {/* <StatisticsResult /> */}
      {/* <Versus /> */}
      <VersusResult />
      <GlobalStyle />
    </div>
  );
}

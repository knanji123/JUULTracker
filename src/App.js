import React, { useState } from "react";
import SimpleStorage from "react-simple-storage";
import { BrowserRouter as Router, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

//Pages
import MainPage from "./pages/main/main";
// import NotFoundPage from "./pages/404";
import Add from "./pages/add/add";

function App() {
  // Pod usage history. Starts out as an empty array
  const [podHistory, setPodHistory] = useState([]);

  return (
    <div>
      <Router>
        {/* Route to home page - passes in podHistory and props */}
        <Route
          path="/"
          exact
          render={routeProps => (
            <MainPage {...routeProps} podHistory={podHistory} />
          )}
        />

        {/* Route to add page - passes in podHistory array, setPodHistory function and props  */}
        <Route
          path="/add"
          render={routeProps => (
            <Add
              {...routeProps}
              podHistory={podHistory}
              setPodHistory={setPodHistory}
            />
          )}
        />
      </Router>
    </div>
  );
}

export default App;

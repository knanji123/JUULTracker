import React, { useState } from 'react';
import SimpleStorage from "react-simple-storage";

import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";


//Pages

import MainPage from "./pages/main/main";
import NotFoundPage from "./pages/404";
import Add from "./pages/add";

function App() {

  // Pod usage history. Starts out as an empty array
  const [ podHistory, setPodHistory ] = useState([]);


  return (
  
    <div>
      <SimpleStorage parent={this} />
      {console.log(this)}

    <Router>
      <Route
        path="/"
        exact
        render={routeProps => (
          <MainPage {...routeProps} podHistory={podHistory} />
        )}
      />
      <Route
        path="/add"
        render={routeProps => (
          <Add {...routeProps} podHistory={podHistory} setPodHistory={setPodHistory} />
        )}
      />
    </Router>
    </div>
  )}

export default App;

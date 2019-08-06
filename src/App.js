import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";


//Pages

import MainPage from "./pages/main/main";
import NotFoundPage from "./pages/404";
import Add from "./pages/add";



function App() {
  return (
    <Router>
      <Route exact path="/" component = {MainPage} />
      <Route path="/add" component={Add}/>
    </Router>
  )}

export default App;

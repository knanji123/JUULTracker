import React from 'react'
import { Link } from 'react-router-dom'
import './main.css';

import juulTracker from '../../img/JuulTracker.svg'
import juul from '../../img/Juul.svg'

import myImage from '../logo.svg'


const MainPage = () =>{
    return (
        <div className="container">

          <div className="header">
            <img src={juulTracker} className="juulLogo"/>
          </div>

          <img src={juul} className="juul"/>
        <h3>POD USAGE</h3>
        <Link to="/add"> 
          <img src={myImage} className="image" />
        </Link>
        </div>
    );
  }

export default MainPage;

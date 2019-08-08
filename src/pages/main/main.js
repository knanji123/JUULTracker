import React from 'react'
import { Link } from 'react-router-dom'
import './main.css';

//Images
import juulTracker from '../../img/JuulTracker.svg'
import juul from '../../img/Juul.svg'
import add from '../../img/add.svg'
import juulCap from '../../img/JuulCap.svg'



const MainPage = () => {
  return (
    <div className="container">

      <div className="header">
        <img src={juulTracker} className="juulLogo" />
      </div>

      <div className="contents">
        <div className="left">
          <img src={juul} className="juul" />
        </div>

        <div className="right">
          <h1>POD USAGE

          <Link to="/add">
            <img src={add} className="add" />
          </Link>
          </h1>

          <div className="track">
            <img src={juulCap} className="juulCap" />
            <p className="title">5% - MINT</p>
            <p className="time">July 29th, 2019<br></br>8:00am</p>
          </div>

          <div className="track">
            <img src={juulCap} className="juulCap" />
            <p className="title">5% - MINT</p>
            <p className="time">July 29th, 2019<br></br>8:00am</p>
          </div>

          <div className="track">
            <img src={juulCap} className="juulCap" />
            <p className="title">5% - MINT</p>
            <p className="time">July 29th, 2019<br></br>8:00am</p>
          </div>

          <div className="track">
            <img src={juulCap} className="juulCap" />
            <p className="title">5% - MINT</p>
            <p className="time">July 29th, 2019<br></br>8:00am</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default MainPage;

import React from 'react'
import { Link } from 'react-router-dom'
import './main.css';

//Images
import juulTracker from '../../img/JuulTracker.svg'
import juul from '../../img/Juul.svg'
import add from '../../img/add.svg'
import mintPod from '../../img/JuulCap.svg'
import fruitPod from '../../img/fruitPod.svg'
import mangoPod from '../../img/mangoPod.svg'
import cucumberPod from '../../img/cucumberPod.svg'
import vanillaPod from '../../img/vanillaPod.svg'
import tobaccoPod from '../../img/tobaccoPod.svg'



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
            <img src={mintPod} className="juulCap" />
            <p className="title">5% - MINT</p>
            <p className="time">July 29th, 2019<br></br>8:00am</p>
          </div>

          <div className="track">
            <img src={fruitPod} className="juulCap" />
            <p className="title">5% - FRUIT</p>
            <p className="time">July 29th, 2019<br></br>8:00am</p>
          </div>

          <div className="track">
            <img src={mangoPod} className="juulCap" />
            <p className="title">5% - MANGO</p>
            <p className="time">July 29th, 2019<br></br>8:00am</p>
          </div>

          <div className="track">
            <img src={vanillaPod} className="juulCap" />
            <p className="title">5% - VANILLA</p>
            <p className="time">July 29th, 2019<br></br>8:00am</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default MainPage;

import React from 'react'
import { Link } from 'react-router-dom'
import './add.css';

import juulTracker from '../img/JuulTracker.svg'
import juul from '../img/Juul.svg'

//Pods Import
import mintPod from '../img/JuulCap.svg'
import fruitPod from '../img/fruitPod.svg'
import mangoPod from '../img/mangoPod.svg'
import cucumberPod from '../img/cucumberPod.svg'
import vanillaPod from '../img/vanillaPod.svg'
import tobaccoPod from '../img/tobaccoPod.svg'


function Add() {
  return (
    <div className="container">

      <div className="header">
        <Link to="/">
          <img src={juulTracker} className="juulLogo" />
        </Link>
      </div>

      <div className="addNew">

        <div className="pods">
          <img src={mintPod} className="cap" />
          <img src={fruitPod} className="cap" />
          <img src={mangoPod} className="cap" />
          <img src={cucumberPod} className="cap" />
          <img src={vanillaPod} className="cap" />
          <img src={tobaccoPod} className="cap" />
        </div>

        <div className="percentage">
          <button>1.5%</button>
          <button>3%</button>
          <button>5%</button>
        </div>

      </div>



    </div>
  );
}

export default Add;
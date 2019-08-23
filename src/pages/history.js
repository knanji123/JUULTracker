import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './add/add.css';
import pods from "./data.js";

import mintPod from '../img/JuulCap.svg'
import fruitPod from '../img/fruitPod.svg'
import mangoPod from '../img/mangoPod.svg'
import cucumberPod from '../img/cucumberPod.svg'
import vanillaPod from '../img/vanillaPod.svg'
import tobaccoPod from '../img/tobaccoPod.svg'


function History() {

    return (
        <div>
            <div className="track">
                <img src={fruitPod} className="juulCap" alt="fruit" />
                <p className="title">5% - FRUIT</p>
                <p className="time">July 29th, 2019<br></br>8:00am</p>
            </div>

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

            <div className="track">
                <img src={vanillaPod} className="juulCap" />
                <p className="title">5% - VANILLA</p>
                <p className="time">July 29th, 2019<br></br>8:00am</p>
            </div>

            <div className="track">
                <img src={vanillaPod} className="juulCap" />
                <p className="title">5% - VANILLA</p>
                <p className="time">July 29th, 2019<br></br>8:00am</p>
            </div>

            <div className="track">
                <img src={vanillaPod} className="juulCap" />
                <p className="title">5% - VANILLA</p>
                <p className="time">July 29th, 2019<br></br>8:00am</p>
            </div>

            <div className="track">
                <img src={vanillaPod} className="juulCap" />
                <p className="title">5% - VANILLA</p>
                <p className="time">July 29th, 2019<br></br>8:00am</p>
            </div>

            <div className="track">
                <img src={vanillaPod} className="juulCap" />
                <p className="title">5% - VANILLA</p>
                <p className="time">July 29th, 2019<br></br>8:00am</p>
            </div>
        </div>
    );
}

export default History;
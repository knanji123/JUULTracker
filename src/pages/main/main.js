import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SimpleStorage from "react-simple-storage";

import './main.css';
import pods from "../data.js";


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


const MainPage = ({ podHistory }) => {


  // var [ entryDate, setEntryDate ] = useState(null);

  // entryDate = new Date();
  // entryDate = podHistory.date.getDate();


  var temp = podHistory;
  console.log("info---->", { podHistory })

  var dateLOL = { temp };
  var testDate = new Date();
  var entryDate = testDate.getDate();
  console.log(entryDate);


  return (
    

    <div className="container">
      <SimpleStorage parent={podHistory} />


      <div className="header">
        <img src={juulTracker} className="juulLogo" />
      </div>

      <div className="contents pageFade">
        <div className="left">
          <img src={juul} className="juul" />
        </div>

        <div className="right">
          <h1>POD USAGE

          <Link to="/add">
              <img src={add} className="add" />
            </Link>
          </h1>


          <div className="history">

            {/* <p>{ JSON.stringify(podHistory)}</p> */}


            {podHistory.map(podTracker => (
              <div className="track">
                {/* {pods.map(podColor =>(
                <img src={podColor.img} className="juulCap" />
              ))} */}
                <p className="title">{podTracker.percentage} -</p>
                <p className="title">{podTracker.pod}</p>
                <p className="time">{podTracker.date.toDateString()}<br></br>{podTracker.date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric'})}</p>
                {/* <p className="title">{podTracker.date}</p> */}
              </div>
            ))}


            {/*        
{podTracker.date.getMinutes() < 10 ? (
  ":0"
   ) : ":"} */}



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

        </div>

      </div>
    </div>
  );
}

export default MainPage;

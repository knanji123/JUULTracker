import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./main.css";
import pods from "../data.js";
import History from "../history.js";

//Images
import juulTracker from "../../img/JuulTracker.svg";
import juul from "../../img/Juul.svg";
import add from "../../img/add.svg";
import mintPod from "../../img/JuulCap.svg";
import fruitPod from "../../img/fruitPod.svg";
import mangoPod from "../../img/mangoPod.svg";
import cucumberPod from "../../img/cucumberPod.svg";
import vanillaPod from "../../img/vanillaPod.svg";
import tobaccoPod from "../../img/tobaccoPod.svg";

const MainPage = ({ podHistory }) => {
  return (
    <div className="container">
      <div className="header">
        <img src={juulTracker} className="juulLogo" alt="Juul Tracker" />
      </div>

      <div className="contents pageFade">
        {/* Left Side */}
        <div className="left">
          <img src={juul} className="juul" alt="Juul" />
        </div>
        {/* End of Left Side */}

        {/* Right Side */}
        <div className="right">
          <h1>
            POD USAGE
            <Link to="/add">
              <img src={add} className="add" alt="Add Button" />
            </Link>
          </h1>

          {/* History */}
          <div className="history">
            {/* <p>{ JSON.stringify(podHistory)}</p> */}
  
            {podHistory.map(podTracker => (
              <div className="track">
                {/* {pods.map(podColor =>(
                <img src={podColor.img} className="juulCap" />
              ))} */}
                <img src={podTracker.img} className="juulCap" />
                <p className="title">{podTracker.percentage} -</p>
                <p className="title">{podTracker.pod}</p>
                <p className="time">
                  {podTracker.date.toDateString()}
                  <br></br>
                  {podTracker.date.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric"
                  })}
                </p>
                {/* <p className="title">{podTracker.date}</p> */}
              </div>
            ))}

            <History />

            {/* End of History */}
          </div>

          {/* End of Right Side */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;

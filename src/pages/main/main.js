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
  
            {podHistory.map(({ flavour, percentage, date}) => {
              const podImage = pods.find(pod => pod.flavour === flavour);

              return (
                <div className="track">
                  <img src={podImage.img} className="juulCap" />
                  <p className="title">{percentage} -</p>
                  <p className="title">{flavour}</p>
                  <p className="time">
                    {date.toDateString()}
                    <br></br>
                    {date.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric"
                    })}
                  </p>
                </div>
              )
            })}

            {/* <History /> */}

            {/* End of History */}
          </div>

          {/* End of Right Side */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;

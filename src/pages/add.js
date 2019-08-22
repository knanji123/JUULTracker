import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './add.css';
import pods from "./data.js";

import juulTracker from '../img/JuulTracker.svg'
import juul from '../img/Juul.svg'


import { tsPropertySignature } from '@babel/types';


// handleChange = (event) => {
//   this.ListeningStateChangedEvent({
//     [event.target.name]: event.target.value
//   })
// }


function Add({ history, podHistory, setPodHistory }) {

  const [ chosenPod, setChosenPod ] = useState(null);
  const [ chosenPercentage, setChosenPercentage ] = useState(null);

  // Handle submit button using `setPodHistory` (passed down from App.js)
  const handleSubmit = () => {
    const newEntry = {
      pod: chosenPod,
      percentage: chosenPercentage,
      date: new Date()
    };

    setPodHistory([newEntry, ...podHistory]);

    history.push("/")
  };

  return (
    <div className="container">

      <div className="header">
        <Link to="/">
          <img src={juulTracker} className="juulLogo" />
        </Link>
      </div>

      <div className="addNew pageFade">

        <h1>NEW POD USAGE</h1>
        <div className="pods">
          {pods.map(pod => (
            <img src={pod.img} className="cap" onClick={() => setChosenPod(pod.name)} />
          ))}
        </div>

        <div className="percentage">
          <button onClick={() => setChosenPercentage("1.5%")}>1.5%</button>
          <button onClick={() => setChosenPercentage("3%")}>3%</button>
          <button onClick={() => setChosenPercentage("5%")}>5%</button>
        </div>

        <pre>{chosenPod} {chosenPercentage}</pre>

        <button className="submit" onClick={handleSubmit}>Submit</button>

      </div>
    </div>

    
  );
}

export default Add;
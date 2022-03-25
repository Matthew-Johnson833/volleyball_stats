import React, { useState } from "react";


// RENAME THIS FILE. ALL BUTTONS FOR A SINGLE STAT LINE WILL BE IN ONE COMPONENT
const HittingButtons = () => {

  const [hittingArray, setHittingArray] = useState({
    // array values. CLG(0) = 1
    hittingAttempts: 0,
    hittingKill: 0,
    hittingError: 0,
    hittingPercentage: 0,
    // create a function to generate the hitting % 
    // call that function and store the value here.
    });

  function setHittingAttempt() {
    setHittingArray(prevState => ({
      ...prevState, 
      hittingAttempts: (hittingArray.hittingAttempts + 1)
    }))
    console.log("Hitting Attempts: " + hittingArray.hittingAttempts);
  }
  function setHittingKill() {
    setHittingArray(prevState => ({
      ...prevState, 
      hittingAttempts: (hittingArray.hittingAttempts + 1),
      hittingKill: (hittingArray.hittingKill + 1)
    }))
    console.log("Hitting Attempts: " + hittingArray.hittingAttempts);
    console.log("Hitting Kills: " + hittingArray.hittingKill);
  }
  function setHittingError() {
    setHittingArray(prevState => ({
      ...prevState, 
      hittingAttempts: (hittingArray.hittingAttempts + 1),
      hittingError: (hittingArray.hittingError + 1)
    }))
    console.log("Hitting Errors: " + hittingArray.hittingError);
  }
  function generateHittingPercentage() {
    // React state doesn't immediately update. Need to click twice to get proper values
    let calcHittingPercentage = (((hittingArray.hittingKill - hittingArray.hittingError)
                              / hittingArray.hittingAttempts)).toFixed(3);
    setHittingArray(prevState => ({
      ...prevState,
      hittingPercentage: calcHittingPercentage
    }))
    console.log("Hitting Percentage: "+ calcHittingPercentage);                                   
    localStorage.setItem('hittingArray', JSON.stringify(hittingArray));

    // next --> grab and parse localStorage in the desired location.
  }

  return (
    <div>
      <button onClick={setHittingAttempt}>
        ATT
      </button>
      <button onClick={setHittingKill}>
        KILL
      </button>
      <button onClick={setHittingError}>
        ERR
      </button>
      <button onClick={generateHittingPercentage}>
        HIT%
      </button>
    </div>

  )
}

export default HittingButtons
import React, { useState } from "react";


// function incrementHittingAttempt() {
//      StatLine.setPlayerStats([... StatLine.playerStats, {
//        hittingAttempts: StatLine.hittingAttempts + 1,
//      }])
//   console.log('Hitting Attempt');
//   console.log(StatLine.playerStats.hittingAttempts)
// }


// RENAME THIS FILE. ALL BUTTONS FOR A SINGLE STAT LINE WILL BE IN ONE COMPONENT
const HittingButtons = () => {

  const [hittingArray, setHittingArray] = useState({
    // array values. CLG(0) = 1
    hittingAttempts: 0,
    hittingKill: 0,
    hittingError: 0,
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
    console.log("Hitting Percentage: "+ (((hittingArray.hittingKill - hittingArray.hittingError) / hittingArray.hittingAttempts)).toFixed(3));
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
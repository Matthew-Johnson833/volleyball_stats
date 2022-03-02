import React, { useState } from "react";


// function incrementHittingAttempt() {
//      StatLine.setPlayerStats([... StatLine.playerStats, {
//        hittingAttempts: StatLine.hittingAttempts + 1,
//      }])
//   console.log('Hitting Attempt');
//   console.log(StatLine.playerStats.hittingAttempts)
// }


// RENAME THIS FILE. ALL BUTTONS FOR A SINGLE STAT LINE WILL BE IN ONE COMPONENT
const HittingAttemptBtn = () => {

  const [hittingArray, setHittingArray] = useState({
    hittingAttempts: 1,
    hittingKill: 1,
    hittingError: 1,
  });
  function setHittingAttempt() {
    setHittingArray(prevState => ({
      ...prevState, 
      hittingAttempts: (hittingArray.hittingAttempts + 1)
    }))
    // Doesn't throw an error but instead logs 'undefined'???
    console.log("Hitting Attempts: " + hittingArray.hittingAttempts);
  }
  function setHittingKill() {
    setHittingArray(prevState => ({
      ...prevState, 
      hittingKill: (hittingArray.hittingKill + 1)
    }))
    console.log("Hitting Kills: " + hittingArray.hittingKill);
  }
  function setHittingError() {
    setHittingArray(prevState => ({
      ...prevState, 
      hittingError: (hittingArray.hittingError + 1)
    }))
    console.log("Hitting Errors: " + hittingArray.hittingError);
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
    </div>

  )
}

export default HittingAttemptBtn
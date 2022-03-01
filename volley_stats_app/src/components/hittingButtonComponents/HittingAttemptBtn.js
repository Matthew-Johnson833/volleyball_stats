import StatLine from "../../components/StatLine";
import React, { useState } from "react";


// function incrementHittingAttempt() {
//      StatLine.setPlayerStats([... StatLine.playerStats, {
//        hittingAttempts: StatLine.hittingAttempts + 1,
//      }])
//   console.log('Hitting Attempt');
//   console.log(StatLine.playerStats.hittingAttempts)
// }

const HittingAttemptBtn = () => {

  const [statArray, setStatArray] = useState({
    hittingAttempts: 1,
  });
  const setStats = (props) => {
    setStatArray(prevState => ({
      ...prevState, 
      hittingAttempts: (statArray.hittingAttempts + 1),
    }))
    // Doesn't throw an error but instead logs 'undefined'???
    console.log(statArray.hittingAttempts.state);
  }

  return (
    <div>
      <StatLine />
      <button onClick={setStats}>
        ATT
      </button>
    </div>

  )
}

export default HittingAttemptBtn
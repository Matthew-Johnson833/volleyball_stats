import React, { useState } from "react";

const DefenseButtons = () => {

  const [defenseArray, setDefenseArray] = useState({
    // array values. CLG(0) = 1
    defenseAttempts: 0,
    defenseDig: 0,
    defenseError: 0,
  });

  function setDefenseAttempt() {
    setDefenseArray(prevState => ({
      ...prevState,
      defenseAttempts: (defenseArray.defenseAttempts + 1)
    }))
    console.log("Defense Attempts: " + defenseArray.defenseAttempts);
  }
  function setDefenseDig() {
    setDefenseArray(prevState => ({
      ...prevState, 
      defenseDig: (defenseArray.defenseDig + 1),
    }))
    console.log("Attacks Dug: " + defenseArray.defenseDig);
  }
  function setDefenseError() {
    setDefenseArray(prevState => ({
      ...prevState, 
      defenseError: (defenseArray.defenseError + 1)
    }))
    console.log("Defense Errors: " + defenseArray.defenseError);
  }
  function generateTotalDigs() {
    console.log("Total Digs: "+ defenseArray.defenseDig);
  }


  return (
    <div>
      <button onClick={setDefenseAttempt}>
        ATT
      </button>
      <button onClick={setDefenseDig}>
        DIG
      </button>
      <button onClick={setDefenseError}>
        ERR
      </button>
      <button onClick={generateTotalDigs}>
        TTL
      </button>
    </div>
  )
}

export default DefenseButtons
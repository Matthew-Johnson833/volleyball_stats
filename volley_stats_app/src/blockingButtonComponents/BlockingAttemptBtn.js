import React, { useState } from "react";

const BlockingButtons = () => {

  const [blockingArray, setBlockingArray] = useState({
    // array values. CLG(0) = 1
    blockingAttempts: 0,
    blockingSolo: 0,
    blockingAssist: 0,
    blockingError: 0,
    totalBlocks: 0,
  });

  function setBlockingAttempt() {
    setBlockingArray(prevState => ({
      ...prevState, 
      blockingAttempts: (blockingArray.blockingAttempts + 1)
    }))
    console.log("Blocking Attempts: " + blockingArray.blockingAttempts);
  }
  function setBlockingSolo() {
    setBlockingArray(prevState => ({
      ...prevState, 
      blockingSolo: (blockingArray.blockingSolo + 1)
    }))
    console.log("Solo Blocks: " + blockingArray.blockingSolo);
  }
  function setBlockingAssist() {
    setBlockingArray(prevState => ({
      ...prevState, 
      blockingAssist: (blockingArray.blockingAssist + 1)
    }))
    console.log("Blocking Assist: " + blockingArray.blockingAssist);
  }
  function setBlockingError() {
    setBlockingArray(prevState => ({
      ...prevState, 
      blockingError: (blockingArray.blockingError + 1)
    }))
    console.log("Blocking Error: " + blockingArray.blockingError);
  }
  function generateTotalBlocks () {
    console.log("Total Blocks: "+ (((blockingArray.blockingAssist * 0.5) + blockingArray.blockingSolo)).toFixed(2));
  }


  return (
    <div>
      <button onClick={setBlockingAttempt}>
        ATT
      </button>
      <button onClick={setBlockingSolo}>
        SOLO
      </button>
      <button onClick={setBlockingAssist}>
        ASST
      </button>
      <button onClick={setBlockingError}>
        ERR
      </button>
      <button onClick={generateTotalBlocks}>
        TTL
      </button>
    </div>
  )
}

export default BlockingButtons
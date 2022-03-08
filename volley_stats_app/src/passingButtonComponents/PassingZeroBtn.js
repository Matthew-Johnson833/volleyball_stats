import React, { useState } from "react";

const PassingButtons = () => {

  const [passingArray, setPassingArray] = useState({
    // array values. CLG(0) = 1
    passing0Scores: 0,
    passing1Scores: 0,
    passing2Scores: 0,
    passing3Scores: 0,
    passing4Scores: 0,
    totalPasses: 0,
    });
    function setPassing0Score() {
      setPassingArray(prevState => ({
        ...prevState, 
        totalPasses: (passingArray.totalPasses + 1),
        passing0Scores: (passingArray.passing0Scores + 1)
      }))
      console.log("Passes Scored 0: " + passingArray.passing0Scores);
    }
    function setPassing1Score() {
      setPassingArray(prevState => ({
        ...prevState, 
        totalPasses: (passingArray.totalPasses + 1),
        passing1Scores: (passingArray.passing1Scores + 1)
      }))
      console.log("Passes Scored 1: " + passingArray.passing1Scores);
    }

    function setPassing2Score() {
      setPassingArray(prevState => ({
        ...prevState, 
        totalPasses: (passingArray.totalPasses + 1),
        passing2Scores: (passingArray.passing2Scores + 1)
      }))
      console.log("Passes Scored 2: " + passingArray.passing2Scores);
    }

    function setPassing3Score() {
      setPassingArray(prevState => ({
        ...prevState,
        totalPasses: (passingArray.totalPasses + 1), 
        passing3Scores: (passingArray.passing3Scores + 1)
      }))
      console.log("Passes Scored 3: " + passingArray.passing3Scores);
    }
    function setPassing4Score() {
      setPassingArray(prevState => ({
        ...prevState, 
        totalPasses: (passingArray.totalPasses + 1),
        passing4Scores: (passingArray.passing4Scores + 1)
      }))
      console.log("Passes Scored 4: " + passingArray.passing4Scores);
    }

    function generatePassingAverage() {
      console.log("Total Passes: " + passingArray.totalPasses);
      console.log("Passing Average: "+ (((passingArray.passing0Scores * 0) + passingArray.passing1Scores + (passingArray.passing2Scores * 2) +
                                          (passingArray.passing3Scores * 3) + (passingArray.passing4Scores * 4)) / passingArray.totalPasses).toFixed(2));
    }

  return (
    <div>
      <button onClick={setPassing0Score}>
        0
      </button>
      <button onClick={setPassing1Score}>
        1
      </button>
      <button onClick={setPassing2Score}>
        2
      </button>
      <button onClick={setPassing3Score}>
        3
      </button>
      <button onClick={setPassing4Score}>
        4
      </button>
      <button onClick={generatePassingAverage}>
        AVG
      </button>
    </div>
  )
}

export default PassingButtons
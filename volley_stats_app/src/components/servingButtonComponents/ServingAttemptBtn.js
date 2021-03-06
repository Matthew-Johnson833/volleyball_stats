import React, { useState } from "react";

const ServingButtons = () => {

  const [servingArray, setServingArray] = useState({
    // array values. CLG(0) = 1
    servingAttempts: 0,
    servingAce: 0,
    servingError: 0,
    servingInPercentage: 0,
  });

  function setServingAttempt() {
    setServingArray(prevState => ({
      ...prevState,
      servingAttempts: (servingArray.servingAttempts + 1)
    }))
    console.log("Serving Attempts: " + servingArray.servingAttempts);
  }
  function setServingAce() {
    setServingArray(prevState => ({
      ...prevState, 
      servingAttempts: (servingArray.servingAttempts + 1),
      servingAce: (servingArray.servingAce + 1)
    }))
    console.log("Service Attempts: " + servingArray.servingAttempts);
    console.log("Service Aces: " + servingArray.servingAce);
  }
  function setServingError() {
    setServingArray(prevState => ({
      ...prevState, 
      servingAttempts: (servingArray.servingAttempts + 1),
      servingError: (servingArray.servingError + 1)
    }))
    console.log("Service Errors: " + servingArray.servingError);
  }
  function generateServingPercentage() {
    // React state doesn't immediately update. Need to click twice to get proper values
    let calcServingPercentage = (((servingArray.servingAttempts - servingArray.servingError) / servingArray.servingAttempts).toFixed(2));
    setServingArray(prevState => ({
      ...prevState,
      servingInPercentage: calcServingPercentage
    }))
    localStorage.setItem('servingArray', JSON.stringify(servingArray));


    console.log(servingArray);
    console.log("Service In Percentage: "+ (((servingArray.servingAttempts - servingArray.servingError) / servingArray.servingAttempts)* 100).toFixed(0)+ "%");
  }


  return (
    <div>
      <button onClick={setServingAttempt}>
        ATT
      </button>
      <button onClick={setServingAce}>
        ACE
      </button>
      <button onClick={setServingError}>
        ERR
      </button>
      <button onClick={generateServingPercentage}>
        IN %
      </button>
    </div>
  )
}

export default ServingButtons
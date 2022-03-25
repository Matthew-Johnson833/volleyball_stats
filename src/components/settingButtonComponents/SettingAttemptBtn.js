import React, { useState } from "react";

const SettingButtons = () => {

  const [settingArray, setSettingArray] = useState({
    // array values. CLG(0) = 1
    settingAttempts: 0,
    settingAssist: 0,
    settingError: 0,
    settingPercentage: 0,
  });

  function setSettingAttempt() {
    setSettingArray(prevState => ({
      ...prevState, 
      settingAttempts: (settingArray.settingAttempts + 1)
    }))
    console.log("Setting Attempts: " + settingArray.settingAttempts);
  }

  function setSettingAssist() {
    setSettingArray(prevState => ({
      ...prevState, 
      settingAttempts: (settingArray.settingAttempts + 1),
      settingAssist: (settingArray.settingAssist + 1)
    }))
    console.log("Setting Assist: " + settingArray.settingAssist);
  }
  function setSettingError() {
    setSettingArray(prevState => ({
      ...prevState, 
      settingAttempts: (settingArray.settingAttempts + 1),
      settingError: (settingArray.settingError + 1)
    }))
    console.log("Setting Error: " + settingArray.settingError);
  }
  function generateSetPercentage () {
    let calcSetPercentage = ((settingArray.settingAssist ) / settingArray.settingAttempts).toFixed(2);

    setSettingArray(prevState => ({
      ...prevState,
      settingPercentage: calcSetPercentage
    }))
    localStorage.setItem('settingArray', JSON.stringify(settingArray));

    console.log("Kill Percentage: "+ calcSetPercentage);
  }

  return (
    <div>
      <button onClick={setSettingAttempt}>
        ATT
      </button>
      <button onClick={setSettingAssist}>
        ASST
      </button>
      <button onClick={setSettingError}>
        ERR
      </button>
      <button onClick={generateSetPercentage}>
        SET%
      </button>
    </div>
  )
}

export default SettingButtons
import React, { useState } from "react";

const SettingButtons = () => {

  const [settingArray, setSettingArray] = useState({
    // array values. CLG(0) = 1
    settingAttempts: 0,
    settingAssist: 0,
    settingError: 0,
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
      settingAssist: (settingArray.settingAssist + 1)
    }))
    console.log("Setting Assist: " + settingArray.settingAssist);
  }
  function setSettingError() {
    setSettingArray(prevState => ({
      ...prevState, 
      settingError: (settingArray.settingError + 1)
    }))
    console.log("Setting Error: " + settingArray.settingError);
  }
  function generateSetPercentage () {
    console.log("Kill Percentage: "+ (((settingArray.settingAssist ) /
                     settingArray.settingAttempts)* 100).toFixed(0)+ "%");
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
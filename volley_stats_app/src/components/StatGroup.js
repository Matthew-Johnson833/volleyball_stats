// import all buttons from their component folders
import { useState } from "react";
import ServingAttemptBtn from "./servingButtonComponents/ServingAttemptBtn";
import ServingAceBtn from "./servingButtonComponents/ServingAceBtn";
import ServingErrorBtn from "./servingButtonComponents/ServingErrorBtn";
import HittingAttemptBtn from "./hittingButtonComponents/HittingAttemptBtn";
import HittingKillBtn from "./hittingButtonComponents/HittingKillBtn";
import HittingErrorBtn from "./hittingButtonComponents/HittingErrorBtn";
import PassingZeroBtn from "./passingButtonComponents/PassingZeroBtn";
import PassingOneBtn from "./passingButtonComponents/PassingOneBtn"
import PassingTwoBtn from "./passingButtonComponents/PassingTwoBtn"
import PassingThreeBtn from "./passingButtonComponents/PassingThreeBtn"
import PassingFourBtn from "./passingButtonComponents/PassingFourBtn"
import BlockingAttemptBtn from "./blockingButtonComponents/BlockingAttemptBtn";
import BlockingSoloBtn from "./blockingButtonComponents/BlockingSoloBtn";
import BlockingAssistBtn from "./blockingButtonComponents/BlockingAssistBtn";
import BlockingErrorBtn from "./blockingButtonComponents/BlockingErrorBtn";
import SettingAttemptBtn from "./settingButtonComponents/SettingAttemptBtn";
import SettingAssistBtn from "./settingButtonComponents/SettingAssistBtn";
import SettingErrorBtn from "./settingButtonComponents/SettingErrorBtn";
import DefenseAttemptBtn from "./defenseButtonComponents/DefenseAttemptBtn";
import DefenseDigBtn from "./defenseButtonComponents/DefenseDigBtn";
import DefenseErrorBtn from "./defenseButtonComponents/DefenseErrorBtn";
import stick from "./stick_test.jpeg";

const StatGroup = () => {

  // key:value array where playerStats is a nested key:value array 
  // what if I put name/number/position into its own nested array and leave the stats on the base level?
  // do I need to even nest the stats? Why not just keep it at a single level and then only display the stats when it's needed?

  // unsure if working? maybe not reaching the console.log()
  const incrementAttempt = () => {
    setPlayerStats([... playerStats, {
      hittingAttempts: playerStats.hittingAttempts + 1,
    }])
    console.log( playerStats.hittingAttempts );
  }

  const [playerStats, setPlayerStats] = useState([{
    playerID: 1,
    playerName: 'Matthew Johnson',
    playerNumber: '33',
    playerPosition: 'OH',
    hittingAttempts: 0,
    hittingKills: 0,
    hittingErrors: 0,
    // hittingPercentage: ((hittingKills - hittingErrors) / hittingAttempts),

  }])

  return (
    <div className="stat-group">
      <div className="player-info">
        <div className="player-image">
          <img src={stick} alt="Stick Figure image" height={100} width={75} />
        </div>
        <div className="player-name">
          Matthew Johnson
        </div>
        <div className="player-number-position-container">
          <div className="player-number">
            <p className="text">33</p>
          </div>
          <div className="player-position">
            <p className="text">OH</p>
          </div>
        </div>
      </div>
      {/* Some buttons will only have a single function
          Most buttons will handle multiple functions consecutively
          https://www.codegrepper.com/code-examples/javascript/multiple+functons+in+one+button+react

          Button Components will house their unique functions, StatGroup will house the state changes for the available buttons 
      */}
      <div className="stat-buttons">
        {/* Serving Points begin after the home team score is incremented. Only the player in bottom right position is accessible (Service Buttons) 
            Passing Points begin after the away team score is incremented. All 6 players have the Passing Buttons accesible
        */}
        <div className="serving-btns">
          {/* Buttons only available after home team score has been incremented
              ATT button will increment Service ATT stat then make hitting, blocking, setting, and defense buttons accessible
              ACE button will increment Service ACE stat then increment home team score -> begin new Serving point
              ERR button will increment Service ERR stat then increment away team score -> begin new Passing point
          */}
          <h6 style={{ color: '#90BE6D' }}>SERVING</h6>
          <div className="serving-btns-individual">
            <ServingAttemptBtn />
            <ServingAceBtn />
            <ServingErrorBtn />
          </div>
        </div>
        <div className="hitting-btns">
          {/* Buttons only available after a Passing Button or Service Button has been clicked 
              ATT button will increment Hitting ATT stat -> hitting, blocking, setting, and defense buttons are still accessible
              KILL button will increment Hitting KILL stat then increment home team score -> begin new Serving point
              ERR button will increment Hitting ERR stat then increment away team score -> begin new Passing point
          */}
          <h6 style={{ color: '#F8961E' }}>HITTING</h6>
          <div className="hitting-btns-individual">
            {/* onClick function built into component file is not being called */}
            <HittingAttemptBtn onClick={incrementAttempt}/>
            <HittingKillBtn />
            <HittingErrorBtn />
          </div>
        </div>
        <div className="passing-btns">
          {/* Buttons only available after the away team score has been incremented 
              All buttons perform the same action 
              Increment the relevent stat then make hitting, blocking, setting, and defense buttons accessible
          */}
          <h6 style={{ color: '#1780A1' }}>PASSING</h6>
          <div className="passing-btns-individual">
            <PassingZeroBtn />
            <PassingOneBtn />
            <PassingTwoBtn />
            <PassingThreeBtn />
            <PassingFourBtn />
          </div>
        </div>
        <div className="blocking-btns">
          {/* Buttons only available after a Passing Button or Service Button has been clicked 
              ATT button will increment Blocking ATT stat -> hitting, blocking, setting, and defense buttons are still accessible
              SOLO button will increment Blocking Solo stat then increment home team score -> begin new Serving point
              AST button will increment Blocking AST stat by .5 <All other buttons increment by 1> -> limit button presses to blocking line
                  AST button requires at least 2 different players to receive an incrementation -> can be increased to max of 3 through use of undo button
                  After 2 players have received an incrementation, increment home team score -> begin new Serving point 
                  If 3 players need an incrementation, undo home team point incrementation, 
                    add 3rd AST button press, increment home point, begin new Serving Point
              ERR button will increment Blocking ERR stat then increment away team score -> begin new Passing point
          */}
          <h6 style={{ color: '#E71D36' }}>BLOCKING</h6>
          <div className="blocking-btns-individual">
            <BlockingAttemptBtn />
            <BlockingSoloBtn />
            <BlockingAssistBtn />
            <BlockingErrorBtn />
          </div>
        </div>
        <div className="setting-btns">
          {/* Buttons only available after a Passing Button or Service Button has been clicked 
              ATT button will increment Setting ATT stat -> hitting, blocking, setting, and defense buttons are still accessible
              AST button will increment Setting AST stat -> limit button presses to hitting KILL button
              ERR button will increment Setting ERR stat then increment away team score -> begin new Passing point
          */}
          <h6 style={{ color: '#FFBD00' }}>SETTING</h6>
          <div className="setting-btns-individual">
            <SettingAttemptBtn />
            <SettingAssistBtn />
            <SettingErrorBtn />
          </div>
        </div>
        <div className="defense-btns">
          {/* Buttons only available after a Passing Button or Service Button has been clicked 
              ATT button will increment Defense ATT stat -> hitting, blocking, setting, and defense buttons are still accessible
              DIG button will increment Defense DIG stat -> hitting, blocking, setting, and defense buttons are still accessible
              ERR button will increment Defense ERR stat then increment away team score -> begin new Passing point
          */}
          <h6 style={{ color: '#9163CB' }}>DEFENSE</h6>
          <div className="defense-btns-individual">
            <DefenseAttemptBtn />
            <DefenseDigBtn />
            <DefenseErrorBtn />
          </div>
        </div>
      </div>
    </div>
  )
}

// StatGroup.propTypes = {
//   onClick: PropTypes.function,
// }


export default StatGroup
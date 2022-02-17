import { ReactPropTypes } from "react";
import stick from "./stick_test.jpeg";


const StatGroup = ({ onClick }) => {
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
          <h6>SERVING</h6>
          <div className="serving-btns-individual">
            <button onClick={onClick}>ATT</button>
            <button onClick={onClick}>ACE</button>
            <button onClick={onClick}>ERR</button>
          </div>
        </div>
        <div className="hitting-btns">
          {/* Buttons only available after a Passing Button or Service Button has been clicked 
              ATT button will increment Hitting ATT stat -> hitting, blocking, setting, and defense buttons are still accessible
              KILL button will increment Hitting KILL stat then increment home team score -> begin new Serving point
              ERR button will increment Hitting ERR stat then increment away team score -> begin new Passing point
          */}
          <h6>HITTING</h6>
          <div className="hitting-btns-individual">
            <button onClick={onClick}>ATT</button>
            <button onClick={onClick}>KILL</button>
            <button onClick={onClick}>ERR</button>
          </div>
        </div>
        <div className="passing-btns">
          {/* Buttons only available after the away team score has been incremented 
              All buttons perform the same action 
              Increment the relevent stat then make hitting, blocking, setting, and defense buttons accessible
          */}
          <h6>PASSING</h6>
          <div className="passing-btns-individual">
            <button onClick={onClick}>0</button>
            <button onClick={onClick}>1</button>
            <button onClick={onClick}>2</button>
            <button onClick={onClick}>3</button>
            <button onClick={onClick}>4</button>
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
          <h6>BLOCKING</h6>
          <div className="blocking-btns-individual">
            <button onClick={onClick}>ATT</button>
            <button onClick={onClick}>SOLO</button>
            <button onClick={onClick}>AST</button>
            <button onClick={onClick}>ERR</button>
          </div>
        </div>
        <div className="setting-btns">
          {/* Buttons only available after a Passing Button or Service Button has been clicked 
              ATT button will increment Setting ATT stat -> hitting, blocking, setting, and defense buttons are still accessible
              AST button will increment Setting AST stat -> limit button presses to hitting KILL button
              ERR button will increment Setting ERR stat then increment away team score -> begin new Passing point
          */}
          <h6>SETTING</h6>
          <div className="setting-btns-individual">
            <button onClick={onClick}>ATT</button>
            <button onClick={onClick}>AST</button>
            <button onClick={onClick}>ERR</button>
          </div>
        </div>
        <div className="defense-btns">
          {/* Buttons only available after a Passing Button or Service Button has been clicked 
              ATT button will increment Defense ATT stat -> hitting, blocking, setting, and defense buttons are still accessible
              DIG button will increment Defense DIG stat -> hitting, blocking, setting, and defense buttons are still accessible
              ERR button will increment Defense ERR stat then increment away team score -> begin new Passing point
          */}
          <h6>DEFENSE</h6>
          <div className="defense-btns-individual">
            <button onClick={onClick}>ATT</button>
            <button onClick={onClick}>DIG</button>
            <button onClick={onClick}>ERR</button>
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
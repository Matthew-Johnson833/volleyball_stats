import { useState } from "react";
import StatGroup from "./components/StatGroup";

function App() {
  //const [hittingAttempt, setHittingAttempt] = useState(0);

  // const incrementHittingAttempt = (hittingAttempt) => {
  //   setHittingAttempt( hittingAttempt = hittingAttempt + 1 );
  // }

  // key:value array where playerStats is a nested key:value array 
  // what if I put name/number/position into its own nested array and leave the stats on the base level?
  const [player, setPlayer] = useState([{
    playerID: 1,
    playerName: 'Matthew Johnson',
    playerNumber: '33',
    playerPosition: 'OH',
    playerStats: [{
      hittingAttempts: 0,
      hittingKills: 0,
      hittingErrors: 0,
      //hittingPercentage: (hittingKills - hittingErrors) / hittingAttempts,
    }]
  }, {
    playerID: 2,
    playerName: 'Dylan Swaeza',
    playerNumber: '1',
    playerPosition: 'LIB',
    playerStats: [{
      hittingAttempts: 0,
      hittingKills: 0,
      hittingErrors: 0,
      //hittingPercentage: (hittingKills - hittingErrors) / hittingAttempts,
    }]
  }
  ])

  return (
    <div className="App">
      <StatGroup />
    </div>
  );
}

export default App;

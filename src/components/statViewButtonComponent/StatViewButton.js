import React, { useState } from "react";

const AggregateStatsSingle = () => {


// Create a pop-out menu to view the stats on button press
const [openStats, setOpenStats] = useState(false);

const handleToggle = () => {
  setOpenStats(!openStats)
  if (openStats === false) {
    // open the modal here
    // makeStatsTable();
    console.log("hello");
    //console.log(parsedStats);
  } else {
    // close the modal here
    console.log("goodbye")
  }

}

return (
  <div className="statsModal">
    <button onClick={handleToggle}>
      {openStats ? "Close" : "Show Stats"}
    </button>
  </div>
)
}

export default AggregateStatsSingle
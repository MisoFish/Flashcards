import React, { useState } from "react";
import Instructions from "./Instructions";
import Staff from "./Staff";

const RangeSelector = ({ setLowNote, setHighNote }) => {
  const [tempLow, setTempLow] = useState(0);
  const [tempHigh, setTempHigh] = useState(0);

  const setRange = () => {
    setLowNote(Math.min(tempLow, tempHigh));
    setHighNote(Math.max(tempLow, tempHigh));
  };

  return (
    <React.Fragment>
      <Instructions
        tempLow={tempLow}
        resetTempLow={() => setTempLow(0)}
        resetTempHigh={() => setTempHigh(0)}
        tempHigh={tempHigh}
        setRange={setRange}
      />
      <Staff
        tempLowChange={(note) => setTempLow(note)}
        tempHighChange={(note) => setTempHigh(note)}
        tempLow={tempLow}
        tempHigh={tempHigh}
      />
    </React.Fragment>
  );
};

export default RangeSelector;

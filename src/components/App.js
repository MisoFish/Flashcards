import React, { useState } from "react";
import RangeSelector from "./RangeSelector";
import Header from "./Header";
import FlashCards from "./FlashCards";

const App = () => {
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);

  return (
    <div>
      <Header />
      {low && high ? (
        <FlashCards low={low} high={high} setLow={setLow} setHigh={setHigh} />
      ) : (
        <RangeSelector
          setLowNote={(note) => setLow(note)}
          setHighNote={(note) => setHigh(note)}
        />
      )}
    </div>
  );
};

export default App;

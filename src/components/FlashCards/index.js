import React from "react";
import FlashCard from "./FlashCard";
import ChangeRange from "./ChangeRange";

const FlashCards = ({ low, high, setLow, setHigh }) => {
  return (
    <React.Fragment>
      <FlashCard low={low} high={high}></FlashCard>
      <ChangeRange setLow={setLow} setHigh={setHigh}></ChangeRange>
    </React.Fragment>
  );
};

export default FlashCards;

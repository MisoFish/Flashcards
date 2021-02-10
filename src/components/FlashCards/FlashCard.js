import React, { useState } from "react";
import { Button, Typography, Fab } from "@material-ui/core";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import { ArrowForward } from "@material-ui/icons";
import notes from "images";

const FlashCard = ({ low, high }) => {
  const getRandomIntegerInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function onClick() {
    if (buttonText === "Answer") {
      setButtonText("Next");
    } else {
      setCurrentNote(getRandomIntegerInclusive(low, high));
      setButtonText("Answer");
    }
  }

  const [currentNote, setCurrentNote] = useState(
    getRandomIntegerInclusive(low, high)
  );
  const [buttonText, setButtonText] = useState("Answer");

  const noteNames = [
    "",
    "so",
    "la",
    "si",
    "do",
    "re",
    "mi",
    "fa",
    "so",
    "la",
    "si",
    "do",
    "do",
    "re",
    "mi",
    "fa",
    "so",
    "la",
    "si",
    "do",
    "re",
    "mi",
    "fa",
    "so",
  ];

  return (
    <React.Fragment>
      <div
        style={{
          width: "350px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div style={{ marginRight: "70px" }}>
          {buttonText === "Next" && (
            <Typography color="primary" variant="h2">
              {noteNames[currentNote]}
            </Typography>
          )}
        </div>
        <div style={{ textAlign: "center" }}>
          <Fab color="primary" onClick={onClick}>
            {buttonText === "Answer" ? <EmojiObjectsIcon /> : <ArrowForward />}
          </Fab>
          <Button style={{ display: "block" }} onClick={onClick}>
            <Typography color="primary" variant="caption">
              {buttonText}
            </Typography>
          </Button>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          width: "250px",
          marginLeft: "auto",
          marginRight: "auto",
          top: "-70px",
          zIndex: "-1",
        }}
      >
        <img style={{ width: "250px" }} src={notes[0]} alt="staff"></img>
        <img
          style={{
            width: "250px",
            position: "absolute",
            top: "0",
            left: "0",
          }}
          src={notes[currentNote]}
          alt="staff"
        />
      </div>
    </React.Fragment>
  );
};

export default FlashCard;

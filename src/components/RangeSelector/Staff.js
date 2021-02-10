import React from "react";
import notes from "images";

const offsetYRanges = [
  [0, 0],
  [438, 458],
  [424, 437],
  [409, 423],
  [395, 408],
  [382, 394],
  [364, 381],
  [350, 365],
  [336, 349],
  [326, 335],
  [310, 325],
  [297, 309],
  [239, 254],
  [218, 238],
  [208, 217],
  [191, 207],
  [176, 190],
  [166, 175],
  [150, 165],
  [135, 149],
  [120, 134],
  [106, 119],
  [91, 105],
  [70, 90]
];

const Staff = ({ tempLowChange, tempHighChange, tempLow, tempHigh }) => {
  const onClick = (e) => {
    e.persist();
    //alert(e.nativeEvent.offsetY);
    const i = offsetYRanges.findIndex(
      (element) =>
        e.nativeEvent.offsetY >= element[0] &&
        e.nativeEvent.offsetY <= element[1]
    );

    if (i > -1) {
      if (!tempLow) {
        tempLowChange(i);
      } else {
        tempHighChange(i);
      }
    }
  };

  return (
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
      <img
        style={{ width: "250px", position: "absolute", top: "0", left: "0" }}
        src={notes[0]}
        onClick={onClick}
        alt="staff"
      />
      {tempLow > 0 && (
        <img
          style={{
            width: "250px",
            position: "absolute",
            top: "0",
            left: "0",
          }}
          src={notes[tempLow]}
          onClick={onClick}
          alt="note"
        />
      )}
      {tempHigh > 0 && (
        <img
          style={{
            width: "250px",
            position: "absolute",
            top: "0",
            left: "0",
          }}
          src={notes[tempHigh]}
          alt="note"
        />
      )}
    </div>
  );
};

export default Staff;

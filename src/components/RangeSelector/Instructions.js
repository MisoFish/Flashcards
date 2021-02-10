import React, { useState } from "react";
import { Container, Grid, Typography, Fab, Button } from "@material-ui/core";
import { Check, Clear, Refresh } from "@material-ui/icons";
import "@fontsource/quicksand";

const Instructions = ({
  tempLow,
  resetTempLow,
  resetTempHigh,
  tempHigh,
  setRange,
}) => {
  const [lowConfirmed, setLowConfirmed] = useState(false);

  const onCheck = () => {
    if (tempLow && tempHigh) {
      setRange();
    } else {
      setLowConfirmed(true);
    }
  };

  const onClear = () => {
    tempHigh ? resetTempHigh() : resetTempLow();
  };

  const reset = () => {
    resetTempLow();
    resetTempHigh();
    setLowConfirmed(false);
  };

  return (
    <Container maxWidth="sm" style={{ height: "92px" }}>
      <Grid container>
        {!tempLow || (tempLow && lowConfirmed && !tempHigh) ? (
          <Grid item xs={12}>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Quicksand",
                textAlign: "center",
                paddingTop: "10px",
              }}
            >
              Select {tempLow ? "higher" : "lower"} note in range:
            </Typography>
          </Grid>
        ) : (
          <React.Fragment>
            <Grid style={{ textAlign: "center" }} item xs={4}>
              <Fab
                style={{ backgroundColor: "#48b59c", color: "white" }}
                onClick={onCheck}
              >
                <Check />
              </Fab>
              <br />
              <Button onClick={onCheck}>
                <Typography style={{ color: "#48b59c" }} variant="caption">
                  Yes
                </Typography>
              </Button>
            </Grid>
            <Grid style={{ textAlign: "center" }} item xs={4}>
              <Fab
                style={{ backgroundColor: "#b54851", color: "white" }}
                onClick={onClear}
              >
                <Clear />
              </Fab>
              <br />
              <Button onClick={onClear}>
                <Typography style={{ color: "#b54851" }} variant="caption">
                  No
                </Typography>
              </Button>
            </Grid>
            {tempHigh > 0 && (
              <Grid style={{ textAlign: "center" }} item xs={4}>
                <Fab color="primary" onClick={reset}>
                  <Refresh />
                </Fab>
                <br />
                <Button onClick={reset}>
                  <Typography color="primary" variant="caption">
                    Start Over
                  </Typography>
                </Button>
              </Grid>
            )}
          </React.Fragment>
        )}
      </Grid>
    </Container>
  );
};

export default Instructions;

import React from "react";
import { Button, Container, Paper } from "@material-ui/core";

const ChangeRange = ({ setLow, setHigh }) => {
  const onClick = () => {
    setLow(0);
    setHigh(0);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "-80px" }}>
      <Paper style={{ padding: "20px", textAlign: "center" }}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={onClick}
        >
          Select Different Range
        </Button>
      </Paper>
    </Container>
  );
};

export default ChangeRange;

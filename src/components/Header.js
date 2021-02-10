import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "@fontsource/roboto";

const Header = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="subtitle1">
            Musical Note Flashcards
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Header;

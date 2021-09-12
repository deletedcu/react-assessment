import React from "react";
import { Box, Container, FormControlLabel, FormGroup, Switch } from "@material-ui/core";
import { useStyle } from "../theme/styles/layout";
import { useTheme } from "../hooks";
import Students from "../pages/Students";

const Layout = () => {
  const classes = useStyle();
  const { theme, toggleThemeF } = useTheme();
  return (
    <Box className={classes.mainContainer}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={theme === "dark"}
              onChange={toggleThemeF}
              color="primary" />
          }
          label="Dark?"
        />
      </FormGroup>
      <Container className={classes.container} maxWidth="md">
        <Students />
      </Container>
    </Box>
  );
};

export default Layout;

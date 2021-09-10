import React from "react";
import { Box, Container } from "@material-ui/core";
import { useStyle } from "../theme/styles/layout";
import Main from "../pages/Main";

const Layout = () => {
  const classes = useStyle();

  return (
    <Box className={classes.mainContainer}>
      <Container className={classes.container} maxWidth="md">
        <Main />
      </Container>
    </Box>
  );
};

export default Layout;

import React from "react";
import { Box, Container } from "@material-ui/core";
import { useStyle } from "../theme/styles/layout";
import Student from "../pages/Student";

const Layout = () => {
  const classes = useStyle();

  return (
    <Box className={classes.mainContainer}>
      <Container className={classes.container} maxWidth="md">
        <Student />
      </Container>
    </Box>
  );
};

export default Layout;

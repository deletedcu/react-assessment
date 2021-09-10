import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import "../theme/main.css";
import { darkTheme, lightTheme } from "../theme/materialUITheme";
import { useTheme } from "../hooks";
import Layout from "./Layout";

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.style.setProperty(
      "--mainBackground",
      theme === "light" ? 
        lightTheme.palette.background.main 
        : darkTheme.palette.background.main
    );
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;

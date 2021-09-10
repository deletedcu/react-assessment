import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles(theme => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.background.main,
    color: theme.palette.text.primary,
    padding: theme.spacing(2.2, 0),
    boxSizing: "border-box",
    position: "relative",
    backgroundPosition: "center",
  },
  container: {
    background: theme.palette.background.primary,
    margin: theme.spacing(0, 0.5),
    borderRadius: 16,
    border: `1px solid ${theme.palette.primary.main}`,
    padding: 0,
    overflowX: "hidden",
  },
  innerContainer: {
    padding: "5px",
  },
}));

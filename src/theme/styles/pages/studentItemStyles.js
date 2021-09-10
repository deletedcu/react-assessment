import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: "8px",
    paddingBottom: "8px",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50px",
    border: `1px solid ${theme.palette.border.lightBorder}`,
    marginTop: "20px",
    marginLeft: "30px",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "30px",
    marginRight: "10px",
  },
  detailContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    marginLeft: "20px",
  }
}));

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
  },
  iconButton: {
    marginLeft: "auto",
    marginRight: "20px",
  },
  tagContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    listStyle: "none",
    marginTop: "10px",
  },
  tag: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  textTag: {
    marginTop: "2px",
  }
}));

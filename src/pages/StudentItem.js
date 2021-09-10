import React from "react";
import {Box, Divider, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import { useStyles } from "../theme/styles/pages/studentItemStyles";

const StudentItem = props => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.mainContainer}>
        <img src={props.pic} className={classes.image}/>
        <Box className={classes.infoContainer}>
          <Typography variant="h4">
            {`${props.firstName} ${props.lastName}`}
          </Typography>
          <Box className={classes.detailContainer}>
            <Typography variant="body1">
              {`Email: ${props.email}`}
            </Typography>
            <Typography variant="body1">
              {`Company: ${props.company}`}
            </Typography>
            <Typography variant="body1">
              {`Skill: ${props.skill}`}
            </Typography>
            <Typography variant="body1">
              {`Average: ${props.id}`}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider light />
    </Box>
  );
};

StudentItem.propTypes = {
  city: PropTypes.string,
  company: PropTypes.string,
  email: PropTypes.string,
  firstName: PropTypes.string,
  grades: PropTypes.array,
  id: PropTypes.string,
  lastName: PropTypes.string,
  pic: PropTypes.string,
  skill: PropTypes.string,
}


export default StudentItem;

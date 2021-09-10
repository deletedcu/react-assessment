import React, { useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  List,
  Typography,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons"
import PropTypes from "prop-types";
import { useStyles } from "../theme/styles/pages/studentItemStyles";

const StudentItem = props => {
  const [isExpand, setExpand] = useState(false);
  const classes = useStyles();

  function calculateAverage() {
    let sum = 0;
    props.grades.forEach(val => {
      sum += parseInt(val);
    });
    const average = (sum / props.grades.length).toFixed(2);
    return average;
  }

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
              {`Average: ${calculateAverage()}%`}
            </Typography>
            {isExpand &&
              <List>
                {props.grades.map((item, index) => {
                  return (
                    <Typography key={index} variant="body2">
                      {`Test${index + 1}:       ${item}%`}
                    </Typography>
                  );
                })}
              </List>
            }
          </Box>
        </Box>
        <IconButton
          className={classes.iconButton}
          size="medium"
          onClick={() => setExpand(!isExpand)}>
          {isExpand ? <Remove /> : <Add />}
        </IconButton>
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

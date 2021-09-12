import React, { useState } from "react";
import {
  Box,
  Chip,
  Divider,
  IconButton,
  List,
  TextField,
  Typography,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons"
import PropTypes from "prop-types";
import useStateWithCallback from "use-state-with-callback";
import { useStyles } from "../theme/styles/pages/studentItemStyles";
import { useTag } from "../hooks";

var currentTag = "";
const StudentItem = props => {
  
  const { addTagF, deleteTagF } = useTag();
  const [isExpand, setExpand] = useState(false);
  const classes = useStyles();
  const [text, setText] = useStateWithCallback("", text => {
    if (text === "" && currentTag !== "") {
      addTagF({ id: props.id, tag: currentTag });
      currentTag = "";
    }
  });

  function handleOnDeleteTag(tag) {
    deleteTagF({ id: props.id, tag });
  }

  function handleOnTextChange(event) {
    event.preventDefault();
    setText(event.target.value);
  }

  function handleOnKeyDown(event) {
    if (event.key === "Enter" && event.target.value !== "") {
      event.preventDefault();
      currentTag = event.target.value;
      setText("");
    }
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
              {`Average: ${props.average}%`}
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
            {(props.tags && props.tags.length > 0) &&
              <Box className={classes.tagContainer}>
                {props.tags.map((data, idx) => {
                  return (
                    <Chip
                      key={idx}
                      label={data}
                      onDelete={() => handleOnDeleteTag(data)}
                      className={classes.tag}
                    />
                  );
                })}
              </Box>
            }
            <TextField
              id={`tag_${props.id}`}
              label="Add a tag"
              className={classes.textTag}
              size="small"
              value={text}
              onChange={handleOnTextChange}
              onKeyDown={handleOnKeyDown} />
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
  average: PropTypes.string,
  tags: PropTypes.array,
}


export default StudentItem;

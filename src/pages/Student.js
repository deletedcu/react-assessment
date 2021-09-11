import React from "react";
import { List } from "@material-ui/core";
import StudentItem from "./StudentItem";
import PropTypes from "prop-types";

const Student = (props) => {

  return (
    <List>
      {props.students.map(item => {
        return (
          <StudentItem 
            key={item.id} 
            {...item} />
        );
      })}
    </List>
  );
};

Student.propTypes = {
  students: PropTypes.array.isRequired,
};

export default Student;

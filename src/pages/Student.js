import React from "react";
import { List } from "@material-ui/core";
import StudentItem from "./StudentItem";
import PropTypes from "prop-types";

const Student = ({students}) => {

  return (
    <List>
      {students.map(item => {
        return (
          <StudentItem key={item.id} {...item} />
        );
      })}
    </List>
  );
};

Student.propTypes = {
  students: PropTypes.array,
};

export default Student;

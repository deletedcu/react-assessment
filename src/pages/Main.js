import React, { useEffect, useState } from "react";
import { Box, TextField } from "@material-ui/core";
import Student from "./Student";
import { useStudents } from "../hooks";
import { useStyles } from "../theme/styles/pages/mainStyles";

const Main = () => {
  const classes = useStyles();
  const { students, getStudentsF } = useStudents();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (students.length === 0) {
      getStudentsF();
    } else {
      setData(students);
    }
  }, [students]);

  function handleOnChangeName(event) {
    console.log(event.target.value);
    const filterData = filterByName(event.target.value.trim());
    setData(filterData);
  }

  function filterByName(name) {
    if (name === "") {
      return students;
    } else {
      return students.filter(item => {
        const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
        return fullName.includes(name.toLowerCase());
      });
    }
  }

  return (
    <Box className={classes.container}>
      <TextField
        id="search-name"
        label="Search by name"
        className={classes.searchName}
        size="medium"
        onChange={handleOnChangeName} />
      <Student students={data}/>
    </Box>
  );
};

export default Main;

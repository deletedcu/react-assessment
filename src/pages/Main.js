import React, { useEffect, useState } from "react";
import { Box, TextField } from "@material-ui/core";
import Student from "./Student";
import { useStudents } from "../hooks";
import { useStyles } from "../theme/styles/pages/mainStyles";

var searchName = "";
var searchTag = "";

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
    searchName = event.target.value.trim().toLowerCase();
    const result = filterData();
    setData(result);
  }

  function handleOnChangeTag(event) {
    searchTag = event.target.value.trim().toLowerCase();
    const result = filterData();
    setData(result);
  }

  function filterData() {
    if (searchName === "" && searchTag === "") {
      return students;
    } else {
      return students.filter(item => {
        if (searchName !== "") {
          const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
          if (!fullName.includes(searchName)) {
            return false;
          }
        }
        
        if (searchTag !== "") {
          if (item.tags) {
            const tags = item.tags.join("|").toLowerCase();
            return tags.includes(searchTag);
          } else {
            return false;
          }
        }

        return true;
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
      <TextField
        id="search-tag"
        label="Search by tag"
        className={classes.searchTag}
        size="medium"
        onChange={handleOnChangeTag} />
      <Student students={data}/>
    </Box>
  );
};

export default Main;

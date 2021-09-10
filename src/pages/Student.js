import React, { useEffect } from "react";
import { Container, List } from "@material-ui/core";
import { useStudents } from "../hooks";
import StudentItem from "./StudentItem";

const Student = () => {
  const { students, getStudentsF } = useStudents();

  useEffect(() => {
    if (students.length === 0) {
      getStudentsF();
    }
  }, [students]);

  return (
    <Container maxWidth="sm">
      <List>
        {students.map(item => {
          return <StudentItem key={item.id} {...item} />
        })}
      </List>
    </Container>
  );
};

export default Student;

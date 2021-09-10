import React, { useEffect } from "react";
import { Container, Button } from "@material-ui/core";
import { useStudents } from "../hooks";

const Student = () => {
  const { students, getStudentsF } = useStudents();

  useEffect(() => {
    if (students.length === 0) {
      getStudentsF();
    }
  }, [students]);

  return (
    <Container maxWidth="sm">
      <Button>Default</Button>
    </Container>
  );
};

export default Student;

import React from "react";
import styled from "styled-components";

const WorkoutTypeForm = ({ setWorkoutType }) => {
  const chooseHandler = event => {
    event.preventDefault();
    setWorkoutType(event.target.value);
  };
  return (
    <Div>
      <Form onSubmit={chooseHandler}>
        <WeightButton value="weightlifting" onClick={chooseHandler}>
          Weightlifting?
        </WeightButton>
        <CardioButton value="cardio" onClick={chooseHandler}>
          Cardio?
        </CardioButton>
      </Form>
    </Div>
  );
};

const Div = styled.div``;
const Form = styled.form``;
const WeightButton = styled.button``;
const CardioButton = styled.button``;

export default WorkoutTypeForm;

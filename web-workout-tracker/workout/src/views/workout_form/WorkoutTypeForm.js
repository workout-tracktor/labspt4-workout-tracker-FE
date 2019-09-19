import React from "react";
import styled from "styled-components";
import weight from "../../assets/icons/Weightlifting.png";
import cardio from "../../assets/icons/Cardio.png";
const WorkoutTypeForm = ({ setWorkoutType }) => {
  const chooseHandler = event => {
    event.preventDefault();
    setWorkoutType(event.target.value);
  };
  return (
    <Div>
      <Form onSubmit={chooseHandler}>
        <Header>What Type of Workout?</Header>
        <Button value="weightlifting" onClick={chooseHandler}>
          <Div>
            <img src={weight} alt="weight" />
          </Div>
          Weightlifting
        </Button>
        <Button value="cardio" onClick={chooseHandler}>
          <Div>
            <img src={cardio} alt="cardio" />
          </Div>
          Cardio
        </Button>
      </Form>
    </Div>
  );
};

const Div = styled.div`
  /* height: 300px; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const Header = styled.h1`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.5;
  margin-bottom: 20px;
`;
const Form = styled.form`
  margin-top: 50px;
`;

const Button = styled.button`
  height: 200px;
  width: 200px;
  background: none;
  border: none;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 36px;
  text-align: center;
  text-transform: uppercase;
  padding: 5px;
  margin: 20px;
  cursor: pointer;
  :hover {
    background: radial-gradient(
      432.3px at 64.26% 22.01%,
      #394366 0%,
      #29304a 100%
    );
    border-radius: 6px;
  }
`;

export default WorkoutTypeForm;

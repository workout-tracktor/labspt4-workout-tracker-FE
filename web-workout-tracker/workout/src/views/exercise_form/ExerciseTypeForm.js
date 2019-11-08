import React, { useEffect, useState } from "react";
import styled from "styled-components";
import weight from "../../assets/icons/Weightlifting.png";
import cardio from "../../assets/icons/Cardio.png";
import { Link } from "react-router-dom";

const ExerciseTypeForm = (props) => {
  // Coming from the suggestedWorkouts
  useEffect(() => {
    const { exerciseName } = props.location.state;
    setExerciseName(`${exerciseName}`)
  })

  const [ExerciseName, setExerciseName] = useState("");
  console.log(ExerciseName)
  const onSubmitHandler = event => {
    event.preventDefault();
  };

    return (
      <Div>
        <Form onSubmit={onSubmitHandler}>
          <Header>What Type of Exercise?</Header>
          <Link to={{pathname: "/exercise-form/weightlifting", state: {exerciseName: ExerciseName}}}>
            <Button value="weightlifting">
              <Div>
                <img src={weight} alt="weight" />
              </Div>
              Weightlifting
            </Button>
          </Link>
          <Link to={{pathname: "/exercise-form/cardio", state: {exerciseName: ExerciseName}}}>
            <Button value="cardio">
              <Div>
                <img src={cardio} alt="cardio" />
              </Div>
              Cardio
            </Button>
          </Link>
        </Form>
      </Div>
    );

}

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

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
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

export default ExerciseTypeForm;

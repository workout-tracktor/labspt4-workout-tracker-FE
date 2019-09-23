import React, { useState } from "react";
import WorkoutCardioForm from "./WorkoutCardioForm";
import WorkoutWeightliftingForm from "./WorkoutWeightliftingForm";
import DatePicker from "../DatePicker";
import styled from "styled-components";

const WorkoutInputForm = ({
  workoutType,
  setWorkoutType,
  setData,
  changeDate,
  changeName
}) => {
  const backHandler = event => {
    event.preventDefault();
    setWorkoutType("");
  };

  const submitHandler = e => {
    e.preventDefault();
    setData(set);
    changeDate(date);
    changeName(name);
  };

  const [name, setName] = useState("");

  const [date, setDate] = useState(new Date());

  const [set, setSet] = useState([]);

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <ButtonDiv>
          <BackInput type="button" value="< Back" onClick={backHandler} />

          <SubmitInput type="submit" />
        </ButtonDiv>

        <Header>NAME OF EXERCISE:</Header>

        <Div>
          <ExerciseInput
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </Div>

        <DateDiv>
          <Text>Date</Text>
          <DatePicker date={date} setDate={setDate} />
        </DateDiv>

        <Div>
          {workoutType === "cardio" ? (
            <WorkoutCardioForm
              setData={setData}
              submitHandler={submitHandler}
              set={set}
              setSet={setSet}
            />
          ) : (
            <WorkoutWeightliftingForm
              setData={setData}
              submitHandler={submitHandler}
              set={set}
              setSet={setSet}
            />
          )}
        </Div>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Div = styled.div`
  /* height: 30px; */
  margin-bottom: 20px;
`;

const DateDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(225, 233, 241, 0.1);
`;
const ButtonDiv = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const BackInput = styled.input`
  background: none;
  border: none;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: #03a3f3;
  opacity: 0.7;
  cursor: pointer;
`;
const ExerciseInput = styled.input`
  width: 600px;
  height: 40px;
  background: none;
  border: none;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  font-family: Roboto Condensed;
  font-size: 18px;
  font-weight: 200;

  @media (max-width: 600px) {
    width: 300px;
  }
`;
const SubmitInput = styled.input`
  /* background: rgba(255, 255, 255, 0.1);
  border-radius: 2px; */
  background: none;
  color: #ffffff;
  font-family: Roboto Condensed;
  font-size: 16px;
  font-weight: bold;
  line-height: 23px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;
const Header = styled.h1`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const Text = styled.h3`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.5;
`;

const Form = styled.form``;

export default WorkoutInputForm;

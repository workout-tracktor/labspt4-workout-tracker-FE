<<<<<<< HEAD
import React, {useState} from "react";
import WorkoutWeightliftingForm from "./WorkoutWeightliftingForm";
import DatePicker from "../DatePicker";
import WorkoutCardioForm from "./WorkoutCardioForm";
=======
import React, { useState } from "react";
import WorkoutSetForm from "./WorkoutSetForm";
import DatePicker from "../DatePicker";
import styled from "styled-components";
>>>>>>> Name of Exercise style

const WorkoutInputForm = ({
  setWorkoutType,
  setData,
  changeDate,
  changeName
}) => {
  const backHandler = event => {
    event.preventDefault();
    setWorkoutType("");
  };

<<<<<<< HEAD
const WorkoutInputForm = ({workoutType, setWorkoutType, setData, changeDate, changeName}) => {
    const backHandler = event => {
        event.preventDefault();
        setWorkoutType("");
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setData(set);
        changeDate(date);
        changeName(name);
    };

    const [name, setName] = useState("");

    const [date, setDate] = useState(new Date());

    const [set, setSet] = useState([]);

    return (
        <>
            <input type='button' value="Go Back" onClick={backHandler}/>
            <form onSubmit={submitHandler}>
                NAME OF EXERCISE:
                <input type='text' value={name} onChange={e => setName(e.target.value)} required/>
                <DatePicker date={date} setDate={setDate}/>
                <input type='submit'/>
                <hr/>

                {workoutType === 'cardio' ?
                    <WorkoutCardioForm setData={setData}
                                       submitHandler={submitHandler}
                                       set={set}
                                       setSet={setSet}/>
                    :
                    <WorkoutWeightliftingForm setData={setData}
                                       submitHandler={submitHandler}
                                       set={set}
                                       setSet={setSet}/>
                }

            </form>
        </>
    )
=======
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

        <Div>
          <DatePicker date={date} setDate={setDate} />
        </Div>

        <Div>
          <WorkoutSetForm
            setData={setData}
            submitHandler={submitHandler}
            set={set}
            setSet={setSet}
          />
        </Div>
      </Form>
    </Container>
  );
>>>>>>> Name of Exercise style
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Div = styled.div`
  height: 30px;
  margin-bottom: 20px;
`;
const ButtonDiv = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const BackInput = styled.input``;
const ExerciseInput = styled.input`
  width: 300px;
  background: none;
  border: none;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  font-family: Roboto Condensed;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
`;
const SubmitInput = styled.input``;
const Header = styled.h1`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 10px;
`;
const Form = styled.form``;

export default WorkoutInputForm;

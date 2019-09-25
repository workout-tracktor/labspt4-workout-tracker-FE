import React from "react";
import styled from "styled-components";
//moment is used to get the time and set AM or PM
import WorkoutForm from "./workout_form/WorkoutForm";
import emoji from "../assets/images/ThinkingEmoji.svg";
import plus from "../assets/icons/Plus.svg";
import { Link } from "react-router-dom";

class Workouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addWorkoutToggler = () => {
    this.setState({ addWorkout: !this.state.addWorkout });
  };

  render() {
    return (
      <Container>
        <Title>
          <TitleText> FITTER FASTER FURTHER </TitleText>
        </Title>

        {this.state.addWorkout ? (
          <WorkoutForm />
        ) : (
          <NoWorkout>
            <Plus src={emoji} alt="thinking emoji" />
            <TextContainer>
              <Text> NO WORKOUTS</Text>
              <Text> LOGGED TODAY</Text>
            </TextContainer>
          </NoWorkout>
        )}

        <Button onClick={this.addWorkoutToggler}>
          <img src={plus} alt="plus" />
          <Link to="/input-workout">ADD A WORKOUT</Link>
        </Button>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: "space-around";
  width: 600px;
  margin: 0 20px;
  height: 100%;

  @media (max-width: 1040px) {
    width: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0 15px 0;
  border-bottom: 1px solid gray;

  @media (max-width: 1040px) {
    margin-top: 25px;
    width: 100%;
    justify-content: center;
  }
`;

const TitleText = styled.p`
  margin: 0 auto;
  justify-content: center;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #03a3f3;
`;
const NoWorkout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px auto;
`;
const Text = styled.p`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: gray;
`;
const Plus = styled.img`
  display: flex;
  justify-content: flex-start;
`;
const Button = styled.button`
  background: linear-gradient(#2fdde4, #2367ff);
  color: white;
  font-size: 24px;
  line-height: 23px;
  font-family: Roboto Condensed, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  padding: 7px 15px;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
  }
  &:focus,
  &:active {
    outline: none;
  }
`;

export default Workouts;

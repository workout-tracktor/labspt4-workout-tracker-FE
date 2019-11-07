import React from "react";
import styled from "styled-components";
//moment is used to get the time and set AM or PM
import plus from "../../assets/icons/Plus.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DrownDownLogs from "../DropdownLogs";
import axios from "axios";
import SuggestedWorkouts from "../../components/SuggestedWorkouts";

class Workouts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayingWorkouts: false
    };
  }

  componentDidMount() {
  }

  titleToggler(bool) {
    //sets the state to rerender the prop titles depending if there is workout data to show user.
    this.setState({ displayingWorkouts: bool });
  }

  render() {
    return (
      <Container>
            <Title>
              <TitleText> FITTER FASTER FURTHER </TitleText>
            </Title>

        {this.props.workouts ? (
          <DrownDownLogs
            workout={this.props.workouts}
            titleToggler={bool => this.titleToggler(bool)}
            newStateWhoDis = {this.props.newStateWhoDis}
          />
        ) : (
          <>
            <NoWorkout titleToggler={bool => this.titleToggler(bool)}>
              <TextContainer>
                <Text> NO WORKOUTS LOGGED</Text>
                <Caption>What would you like to workout today?</Caption>
              </TextContainer>
            </NoWorkout>
            <SuggestedWorkouts />
            </>
          )}
        {/* Bring in the suggestions here I believe. Check with Super Awesome Miguel. */}
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
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #636774;
  padding: 20px 0;
  @media (max-width: 1040px) {
    margin-top: 25px;
    width: 100%;
    justify-content: center;
  }
`;

const TitleText = styled.p`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #03a3f3;
`;
const TitleTextWithEdit = styled.p`
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #03a3f3;
`;
const NoWorkout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.p`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: white;
  opacity: 0.3;
`;
const Caption = styled.p`
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-top: 10px;
  color: white;
  opacity: 0.3;
`
const TitleWithEdit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 15px 0;
  width: 100%;

  @media (max-width: 1040px) {
    margin-top: 25px;
    width: 100%;
    justify-content: flex-end;
  }
`;
const Plus = styled.img`
  display: flex;
  justify-content: flex-start;
`;

const mapStateToProps = state => {
  return {
    exerciseData: state.exerciseData
  };
};

export default connect(mapStateToProps)(Workouts);

import React from "react";
import axios from "axios";
import styled from "styled-components";
import InputWorkoutForm from "./InputWorkoutForm";
import Calendar from "react-calendar";

import NoWorkouts from './NoWorkouts'

class Landing extends React.Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    axios
      .get("https://workouttrackerprod.herokuapp.com/")
      .then(res => {
        this.setState(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange = date => this.setState({ date });
  render() {
    return (
      <Container>
        <Group> 
          <Calendar onChange={this.onChange} value={this.state.date} />
          <NoWorkouts />
        </Group>
        
        <InputWorkoutForm />

      </Container>
    );
  }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0;
    height: 700px;
`
const Group = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export default Landing;

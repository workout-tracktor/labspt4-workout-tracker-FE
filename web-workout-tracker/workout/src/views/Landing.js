import React from "react";
import axios from "axios";
import styled from "styled-components";
import Calendar from "react-calendar";
import "./Calendar.css";
import Workouts from "./Workouts";

class Landing extends React.Component {
  state = {
    date: new Date(),
    response:null
  };

  componentDidMount() {
    axios
      .get("https://workouttrackerprod.herokuapp.com/api/user")
      .then(res => {
        this.setState({...this.state, response:res.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange = date => this.setState({ date });

  render() {
    return (
      <Container>
        {console.log(this.state.response)}
        <Calendar onChange={this.onChange} value={this.state.date} />
        <Workouts />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px 0;

  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Landing;

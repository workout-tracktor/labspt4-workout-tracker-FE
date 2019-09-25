import React from "react";
import axios from "axios";
import styled from "styled-components";
import Calendar from "react-calendar";
import "./Calendar.css";
import Workouts from "./Workouts";

class Landing extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        date: new Date(),
        //when date is clicked on, 
        workouts: true,
        //selectedDate is the date that is selected on the calendar
        //which will then be sent to back end to check to see if there was workout data
        selectedDate: null
      };
  }


  componentDidMount() {
    //Toggles navbar component prop to render new workout and settings button
    this.props.isRegistered()
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

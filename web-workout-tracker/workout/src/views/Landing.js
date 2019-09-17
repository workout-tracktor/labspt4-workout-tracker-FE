import React from "react";
import axios from "axios";
import styled from "styled-components";
import Calendar from "react-calendar";
import Workouts from './Workouts'
import NoWorkouts from './NoWorkouts'

class Landing extends React.Component {
  state = {
    date: new Date(),
    //when date is clicked on, 
    workouts: false,
    //selectedDate is the date that is selected on the calendar
    //which will then be sent to back end to check to see if there was workout data
    selectedDate: null
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
          <Calendar onChange={this.onChange} value={this.state.date} />
          {this.state.Workouts? 
            <Workouts 
              //Once connected to backend, if there is workout data on the selected date, passes it as props.
            />
            :   <NoWorkouts />         
          }
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

`

export default Landing;

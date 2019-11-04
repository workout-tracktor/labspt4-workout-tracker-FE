import React from "react";
import axios from "axios";
import styled from "styled-components";
import Calendar from "react-calendar";
import "../Calendar.css";
import Workouts from "./Workouts";
import { connect } from "react-redux";

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      //when date is clicked on, 
      workouts: true,
      //selectedDate is the date that is selected on the calendar
      //which will then be sent to back end to check to see if there was workout data
      selectedDate: null,
      isLoggedin: false,
      user_id: ""
    };
  }

  get_date = (dateObject) => {
    const date = dateObject
    const year = date.getFullYear()
    const month = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    return `${year}-${month}-${day}`
  }

  componentDidMount() {
    //checks to see if user is logged in by checking cookie to render components
    if (document.cookie.indexOf('auth0.is.authenticated') !== -1) {
      this.setState({ isLoggedin: !this.state.isLoggedin })
    } else { this.setState({ isLoggedin: false }) }

    // const user_id = localStorage.getItem('user_id');
    // const date = this.get_date(this.state.date)
    //


  }
  onChange = date => {
    this.setState({ date })
    const user_id = localStorage.getItem('user_id');
    const todayDate = this.get_date(date)
    console.log('Today Date'+ todayDate)

    axios.get(`https://workouttrackerprod.herokuapp.com/api/exercises?user_id=${user_id}&date=${todayDate}`)
        .then(res => {
          this.setState(res.data);
          console.log(res.data)
        })
        .catch(err => {
          console.log(err);
        });


  }

  render() {
    return (
      <Container>
        {this.state.isLoggedin ?
          <>
            <Calendar onChange={this.onChange} value={this.state.date} />
            <Workouts />
          </>
          : null}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  thisUser: state.thisUser
});

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
export default connect(mapStateToProps, {})(Landing);
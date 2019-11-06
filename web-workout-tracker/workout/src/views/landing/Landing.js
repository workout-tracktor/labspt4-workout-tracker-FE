import React from "react";
import axios from "axios";
import styled from "styled-components";
import Calendar from "react-calendar";
import "../Calendar.css";
import Workouts from "./Workouts";
import { connect } from "react-redux";
import CheckoutForm from "../../components/CheckoutForm";

class Landing extends React.Component {
  constructor(props) {
    super(props);
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
  componentDidMount() {
    //checks to see if user is logged in by checking cookie to render components
    if (document.cookie.indexOf("auth0.is.authenticated") !== -1) {
      this.setState({ isLoggedin: !this.state.isLoggedin });
    } else {
      this.setState({ isLoggedin: false });
    }
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
      <>
        <Container>
          {this.state.isLoggedin ? (
            <>
              <Calendar onChange={this.onChange} value={this.state.date} />

              <Workouts />
            </>
          ) : null}
        </Container>
        <CheckoutDiv>
          <CheckoutForm />
        </CheckoutDiv>
      </>
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

const CheckoutDiv = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
export default connect(
  mapStateToProps,
  {}
)(Landing);
